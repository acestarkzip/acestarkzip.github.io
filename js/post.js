(() => {
  "use strict";

  const REPOSITORY = {
    owner: "acestarkzip",
    name: "acestarkzip.github.io",
    branch: "main"
  };

  const params = new URLSearchParams(window.location.search);
  const filePath = params.get("file");
  const titleElement = document.getElementById("article-title");
  const dateElement = document.getElementById("article-date");
  const categoryElement = document.getElementById("article-category");
  const pathElement = document.getElementById("article-path");
  const contentElement = document.getElementById("markdown-content");
  const yearElement = document.getElementById("current-year");

  if (yearElement) yearElement.textContent = String(new Date().getFullYear());

  function showError(message) {
    titleElement.textContent = "게시글을 찾을 수 없습니다.";
    contentElement.replaceChildren();
    const notice = document.createElement("p");
    notice.textContent = message;
    const back = document.createElement("a");
    back.href = "./index.html#blog";
    back.className = "text-link";
    back.textContent = "블로그 목록으로 돌아가기 ↗";
    contentElement.append(notice, back);
  }

  function safeFilePath(value) {
    if (!value || !value.startsWith("TIL/") || !value.toLowerCase().endsWith(".md")) return false;
    const segments = value.split("/");
    return !segments.some((segment) => segment === ".." || segment === "." || segment === "");
  }

  function cleanTitle(value) {
    return value
      .replace(/<[^>]*>/g, "")
      .replace(/`/g, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .trim();
  }

  function getFilenameTitle(path) {
    const filename = path.split("/").pop();
    return filename
      .replace(/\.md$/i, "")
      .replace(/^\d{4}-\d{2}-\d{2}[_\s-]/, "")
      .replace(/_/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getDate(path) {
    const filename = path.split("/").pop();
    const match = filename.match(/^(\d{4}-\d{2}-\d{2})[_\s-]/);
    return match ? match[1] : "";
  }

  function getCategory(title) {
    const value = title.toLowerCase();
    if (value.includes("openusd") || value.includes("usd")) return "OPENUSD";
    if (value.includes("isaac") || value.includes("robot") || value.includes("ros")) return "ROBOTICS";
    if (value.includes("python") || value.includes("pandas") || value.includes("numpy")) return "PYTHON";
    if (value.includes("machine learning") || value.includes("ensemble") || value.includes("boosting")) return "MACHINE LEARNING";
    if (value.includes("github") || value.includes("git")) return "DEVELOPMENT";
    return "LEARNING NOTE";
  }

  function resolveMarkdownLinks(markdownHtml, markdownPath) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = markdownHtml;
    const siteRoot = new URL("./", window.location.href);
    const markdownUrl = new URL(markdownPath.split("/").map(encodeURIComponent).join("/"), siteRoot);

    wrapper.querySelectorAll("img[src], a[href]").forEach((element) => {
      const attribute = element.tagName === "IMG" ? "src" : "href";
      const original = element.getAttribute(attribute);
      if (!original || /^(?:https?:|mailto:|tel:|data:|blob:|#|\/\/)/i.test(original)) {
        if (element.tagName === "A" && /^https?:\/\//i.test(original || "")) {
          element.target = "_blank";
          element.rel = "noopener noreferrer";
        }
        return;
      }

      try {
        const resolved = new URL(original, markdownUrl);
        if (element.tagName === "A" && resolved.pathname.toLowerCase().endsWith(".md")) {
          const relativePath = decodeURIComponent(resolved.pathname.replace(siteRoot.pathname, "").replace(/^\//, ""));
          element.href = `./post.html?file=${encodeURIComponent(relativePath)}`;
        } else {
          element.setAttribute(attribute, resolved.href);
          if (element.tagName === "A") {
            element.target = "_blank";
            element.rel = "noopener noreferrer";
          }
        }
      } catch (error) {
        console.warn("Could not resolve Markdown URL:", original, error);
      }
    });
    return wrapper;
  }

  async function loadPost() {
    if (!safeFilePath(filePath)) {
      showError("올바른 게시글 주소가 아닙니다. 블로그 목록에서 게시글을 선택해 주세요.");
      return;
    }

    const filenameTitle = getFilenameTitle(filePath);
    const date = getDate(filePath);
    titleElement.textContent = filenameTitle || "Untitled note";
    categoryElement.textContent = getCategory(filenameTitle);
    if (date) {
      dateElement.dateTime = date;
      dateElement.textContent = date.replace(/-/g, ".");
    }
    pathElement.textContent = filePath;

    const rawUrl = `https://raw.githubusercontent.com/${REPOSITORY.owner}/${REPOSITORY.name}/${REPOSITORY.branch}/${filePath.split("/").map(encodeURIComponent).join("/")}`;
    try {
      const response = await fetch(rawUrl);
      if (!response.ok) throw new Error(`GitHub에서 파일을 가져오지 못했습니다. (${response.status})`);
      const markdown = await response.text();

      if (!window.marked || !window.DOMPurify) {
        throw new Error("Markdown 표시 라이브러리를 불러오지 못했습니다. 네트워크 연결을 확인해 주세요.");
      }

      const parsed = window.marked.parse(markdown, { gfm: true, breaks: false });
      const safeHtml = window.DOMPurify.sanitize(parsed, {
        USE_PROFILES: { html: true },
        ADD_ATTR: ["target", "rel"]
      });
      const content = resolveMarkdownLinks(safeHtml, filePath);

      // Use the first Markdown H1 as the visible page title when one exists.
      const firstH1 = content.querySelector("h1");
      if (firstH1) {
        const headingTitle = firstH1.textContent.trim();
        if (headingTitle) titleElement.textContent = headingTitle;
        firstH1.remove();
      }
      contentElement.replaceChildren(...Array.from(content.childNodes));
    } catch (error) {
      console.error("Blog article loading failed:", error);
      showError(error instanceof Error ? error.message : "네트워크 연결을 확인해 주세요.");
    }
  }

  loadPost();
})();
