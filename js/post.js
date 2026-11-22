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

  // Keep standalone hashtag rows as normal paragraphs instead of letting a
  // Markdown parser interpret the leading # as a heading marker.
  // Notion exports commonly store these rows without a space after the first #.
  // Fenced code blocks are skipped so code examples remain unchanged.
  function protectStandaloneHashtagLines(markdown) {
    const parts = markdown.split(/(\r\n|\n|\r)/);
    let activeFenceCharacter = "";
    let activeFenceLength = 0;

    for (let index = 0; index < parts.length; index += 2) {
      const line = parts[index];
      const fence = line.match(/^ {0,3}(`{3,}|~{3,})/);

      if (fence) {
        const marker = fence[1];
        if (!activeFenceCharacter) {
          activeFenceCharacter = marker[0];
          activeFenceLength = marker.length;
        } else if (marker[0] === activeFenceCharacter && marker.length >= activeFenceLength) {
          activeFenceCharacter = "";
          activeFenceLength = 0;
        }
        continue;
      }

      if (activeFenceCharacter) continue;

      const hashtagLine = line.match(/^([ \t]{0,3})(#\S.*)$/);
      if (!hashtagLine) continue;

      const hashtagCount = hashtagLine[2].match(/(?:^|\s)#[^\s#]+/g) || [];
      if (hashtagCount.length >= 3) {
        parts[index] = `${hashtagLine[1]}\\${hashtagLine[2]}`;
      }
    }

    return parts.join("");
  }

  // Promote Notion's legacy named anchors to real heading IDs BEFORE DOMPurify.
  // Some static exporters/sanitizers strip the `name` attribute, which leaves
  // TOC links pointing at IDs that no longer exist.
  function promoteNotionHeadingAnchors(markdownHtml) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = markdownHtml;

    wrapper.querySelectorAll('a[name^="notion-heading-"]').forEach((anchor) => {
      const anchorId = anchor.getAttribute("name") || "";
      if (!/^notion-heading-[a-z0-9-]+$/i.test(anchorId)) return;

      let markerBlock = anchor;
      const parent = anchor.parentElement;
      const isAnchorOnlyParagraph = parent &&
        parent.tagName === "P" &&
        parent.children.length === 1 &&
        parent.firstElementChild === anchor &&
        parent.textContent.trim() === "";
      if (isAnchorOnlyParagraph) markerBlock = parent;

      // Skip empty paragraph wrappers that a Markdown parser may add around
      // standalone HTML anchors, then associate the anchor with the next heading.
      let next = markerBlock.nextElementSibling;
      while (next && next.tagName === "P" &&
        next.textContent.trim() === "" &&
        !next.querySelector("img, video, iframe, table, pre")) {
        const empty = next;
        next = next.nextElementSibling;
        if (empty !== markerBlock) empty.remove();
      }

      if (next && /^H[1-6]$/.test(next.tagName)) {
        next.id = anchorId;
        markerBlock.remove();
        return;
      }

      // Fallback: keep a real ID target at the original marker location.
      anchor.id = anchorId;
      anchor.removeAttribute("name");
      anchor.setAttribute("aria-hidden", "true");
      anchor.style.display = "block";
      anchor.style.height = "0";
    });

    return wrapper.innerHTML;
  }

  // Normalize the Notion-generated contents list before it is inserted.
  // The exported Markdown can contain a parent TOC item followed by child
  // links rendered as `<br> - <a>` instead of a real nested list. Convert
  // those links into semantic <ul>/<li> elements so their hierarchy survives.
  function normalizeTableOfContents(root) {
    if (!root) return;

    const tocHeading = Array.from(root.querySelectorAll("h1, h2, h3, h4"))
      .find((heading) => /목차|contents/i.test(heading.textContent || ""));
    if (!tocHeading) return;

    let tocList = tocHeading.nextElementSibling;
    while (tocList && tocList.tagName === "P" && !tocList.textContent.trim()) {
      tocList = tocList.nextElementSibling;
    }
    if (!tocList || tocList.tagName !== "UL") return;

    tocList.classList.add("toc-list");

    // Only inspect direct children of each list item. This prevents links in
    // the article body from being mistaken for contents sub-items.
    tocList.querySelectorAll("li").forEach((item) => {
      const nodes = Array.from(item.childNodes);
      const keptNodes = [];
      const childLinks = [];

      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        if (node.nodeName !== "BR") {
          keptNodes.push(node);
          continue;
        }

        const dashNode = nodes[index + 1];
        const nextNode = nodes[index + 2];
        const isDashText = dashNode && dashNode.nodeType === Node.TEXT_NODE &&
          /^\s*-\s*$/.test(dashNode.textContent || "");

        if (isDashText && nextNode && nextNode.nodeName === "A") {
          childLinks.push(nextNode);
          index += 2;
          continue;
        }

        keptNodes.push(node);
      }

      if (!childLinks.length) return;

      item.replaceChildren(...keptNodes);
      const nestedList = document.createElement("ul");
      nestedList.className = "toc-sublist";

      childLinks.forEach((link) => {
        const childItem = document.createElement("li");
        childItem.appendChild(link);
        nestedList.appendChild(childItem);
      });

      item.appendChild(nestedList);
    });
  }

  function scrollToHeading(target, behavior = "auto") {
    if (!target) return;
    const scroller = document.scrollingElement || document.documentElement;
    const header = document.querySelector(".site-header");
    const headerOffset = header ? header.getBoundingClientRect().height + 16 : 16;
    const top = Math.max(
      0,
      target.getBoundingClientRect().top + scroller.scrollTop - headerOffset
    );

    if (typeof scroller.scrollTo === "function") {
      scroller.scrollTo({ top, behavior });
    } else {
      scroller.scrollTop = top;
    }
  }

  function restoreInitialTocPosition() {
    const rawHash = window.location.hash.slice(1);
    if (!rawHash.startsWith("notion-heading-")) return;

    let targetId = rawHash;
    try { targetId = decodeURIComponent(rawHash); } catch (_) { /* Keep the literal hash. */ }

    requestAnimationFrame(() => requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (target) scrollToHeading(target, "auto");
    }));
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

      const markdownForRendering = protectStandaloneHashtagLines(markdown);
      const parsed = window.marked.parse(markdownForRendering, { gfm: true, breaks: false });
      // Convert legacy Notion anchors before sanitization so the sanitizer
      // cannot discard the only copy of each TOC target.
      const anchoredHtml = promoteNotionHeadingAnchors(parsed);
      const normalizedHtml = document.createElement("div");
      normalizedHtml.innerHTML = anchoredHtml;
      normalizeTableOfContents(normalizedHtml);
      const safeHtml = window.DOMPurify.sanitize(normalizedHtml.innerHTML, {
        USE_PROFILES: { html: true },
        ADD_ATTR: ["target", "rel", "id"]
      });
      const content = resolveMarkdownLinks(safeHtml, filePath);

      // Use the first Markdown H1 as the visible page title when one exists.
      // Preserve its fragment target too, in case a TOC item points to the H1.
      const firstH1 = content.querySelector("h1");
      if (firstH1) {
        const headingTitle = firstH1.textContent.trim();
        if (headingTitle) titleElement.textContent = headingTitle;
        if (firstH1.id) {
          titleElement.id = firstH1.id;
        }
        firstH1.remove();
      }
      contentElement.replaceChildren(...Array.from(content.childNodes));
      restoreInitialTocPosition();
    } catch (error) {
      console.error("Blog article loading failed:", error);
      showError(error instanceof Error ? error.message : "네트워크 연결을 확인해 주세요.");
    }
  }

  loadPost();
})();
