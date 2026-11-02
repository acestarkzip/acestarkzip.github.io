(() => {
  "use strict";

  // Public GitHub repository that stores the automatically exported Notion TIL files.
  const REPOSITORY = {
    owner: "acestarkzip",
    name: "acestarkzip.github.io",
    branch: "main",
    directory: "TIL"
  };
  const CACHE_DURATION = 2 * 60 * 1000;
  const MAX_HOME_POSTS = 15;
  const IS_ARCHIVE_PAGE = document.body.classList.contains("archive-page");
  const CACHE_KEY = `acestarkzip-blog-posts-v6-canonical-index-${IS_ARCHIVE_PAGE ? "archive" : "home"}`;

  const list = document.getElementById("post-list");
  const count = document.getElementById("post-count");
  const year = document.getElementById("current-year");
  const progress = document.querySelector(".top-progress");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const sortButtons = Array.from(document.querySelectorAll(".sort-button"));
  let loadedPosts = [];
  let loadedTotalCount = 0;
  let postsReady = false;
  let currentSort = "newest";

  if (year) year.textContent = String(new Date().getFullYear());

  // Small-screen navigation.
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      menuButton.setAttribute("aria-label", expanded ? "메뉴 열기" : "메뉴 닫기");
      nav.classList.toggle("is-open", !expanded);
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "메뉴 열기");
      });
    });
  }

  // Decorative reading-progress line.
  if (progress) {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  }

  if (!list) return;

  const apiUrl = `https://api.github.com/repos/${REPOSITORY.owner}/${REPOSITORY.name}/git/trees/${REPOSITORY.branch}?recursive=1`;
  const indexUrl = `https://raw.githubusercontent.com/${REPOSITORY.owner}/${REPOSITORY.name}/${REPOSITORY.branch}/${REPOSITORY.directory}/blog-index.json`;

  function getPostDate(filename) {
    const match = filename.match(/^(\d{4}-\d{2}-\d{2})[_\s-]/);
    return match ? match[1] : null;
  }

  function getPostTitle(filename) {
    return filename
      .replace(/\.md$/i, "")
      .replace(/^\d{4}-\d{2}-\d{2}[_\s-]/, "")
      .replace(/_/g, " ")
      .replace(/\s+/g, " ")
      .trim() || "Untitled note";
  }

  function getCategory(title) {
    const value = title.toLowerCase();
    if (value.includes("openusd") || value.includes("usd")) return "OPENUSD";
    if (value.includes("isaac") || value.includes("robot") || value.includes("ros")) return "ROBOTICS";
    if (value.includes("python") || value.includes("pandas") || value.includes("numpy")) return "PYTHON";
    if (value.includes("machine learning") || value.includes("ensemble") || value.includes("boosting")) return "MACHINE LEARNING";
    if (value.includes("github") || value.includes("git")) return "DEVELOPMENT";
    if (value.includes("linux") || value.includes("server") || value.includes("infra")) return "INFRASTRUCTURE";
    return "LEARNING NOTE";
  }

  function toPost(item) {
    const filename = item.path.split("/").pop();
    const date = getPostDate(filename);
    if (!date) return null;
    const title = getPostTitle(filename);
    return {
      path: item.path,
      date,
      title,
      category: getCategory(title)
    };
  }

  function formatDate(dateString) {
    const [yearValue, monthValue, dayValue] = dateString.split("-");
    return `${yearValue}.${monthValue}.${dayValue}`;
  }

  // Read the "간단메모" saved in the Markdown metadata by update_readme.py.
  // Supports both the current blockquote-list format and the earlier plain format.
  function extractPostMemo(markdown) {
    const lines = String(markdown || "").split(/\r?\n/);

    for (const line of lines.slice(0, 20)) {
      const match = line.match(/^\s*>\s*(?:-\s*)?\*{0,2}간단메모\s*:\*{0,2}\s*(.*?)\s*$/);
      if (match) return match[1].trim();
    }

    return "";
  }

  async function loadPostMemo(post) {
    const rawUrl = `https://raw.githubusercontent.com/${REPOSITORY.owner}/${REPOSITORY.name}/${REPOSITORY.branch}/${post.path
      .split("/")
      .map(encodeURIComponent)
      .join("/")}`;

    try {
      const response = await fetch(rawUrl, { cache: "no-store" });
      if (!response.ok) return { ...post, memo: "" };

      const markdown = await response.text();
      return { ...post, memo: extractPostMemo(markdown) };
    } catch (error) {
      // A memo fetch failure must not prevent the post list from appearing.
      console.warn("Could not load post memo:", post.path, error);
      return { ...post, memo: "" };
    }
  }

  async function loadMemosWithConcurrency(posts, concurrency = 8) {
    const results = new Array(posts.length);
    let nextIndex = 0;

    async function worker() {
      while (nextIndex < posts.length) {
        const currentIndex = nextIndex++;
        results[currentIndex] = await loadPostMemo(posts[currentIndex]);
      }
    }

    const workerCount = Math.min(Math.max(1, concurrency), posts.length);
    await Promise.all(Array.from({ length: workerCount }, () => worker()));
    return results;
  }

  function createPostElement(post) {
    const link = document.createElement("a");
    link.className = "post-item";
    link.href = `./post.html?file=${encodeURIComponent(post.path)}`;
    link.setAttribute("aria-label", `${post.title}, ${formatDate(post.date)}${post.memo ? `, 간단메모: ${post.memo}` : ""} 게시글 읽기`);

    const number = document.createElement("span");
    number.className = "post-number";
    number.textContent = String(post.number).padStart(2, "0");

    const date = document.createElement("time");
    date.className = "post-date";
    date.dateTime = post.date;
    date.textContent = formatDate(post.date);

    const main = document.createElement("span");
    main.className = "post-main";

    const category = document.createElement("span");
    category.className = "post-category";
    category.textContent = post.category;

    const title = document.createElement("span");
    title.className = "post-title";
    title.textContent = post.title;

    const memo = document.createElement("span");
    memo.className = "post-memo";
    memo.textContent = post.memo || "";
    if (!post.memo) memo.setAttribute("aria-hidden", "true");

    const arrow = document.createElement("span");
    arrow.className = "post-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";

    main.append(category, title);
    link.append(number, date, main, memo, arrow);
    return link;
  }

  function renderPosts(posts, totalCount = posts.length) {
    list.replaceChildren();
    if (count) count.textContent = String(totalCount).padStart(2, "0");

    if (posts.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "아직 공개할 학습 기록이 없습니다. 새로운 TIL이 올라오면 여기에 표시됩니다.";
      list.append(empty);
      list.setAttribute("aria-busy", "false");
      return;
    }

    const fragment = document.createDocumentFragment();
    posts.forEach((post) => fragment.append(createPostElement(post)));
    list.append(fragment);
    list.setAttribute("aria-busy", "false");
  }

  function renderSortedPosts() {
    // Keep the loading or error state visible until a post response is ready.
    if (!postsReady) return;
    const orderedPosts = currentSort === "oldest" ? [...loadedPosts].reverse() : loadedPosts;
    renderPosts(orderedPosts, loadedTotalCount);
  }

  function setSortOrder(order) {
    currentSort = order === "oldest" ? "oldest" : "newest";

    sortButtons.forEach((button) => {
      const isActive = button.dataset.sort === currentSort;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    renderSortedPosts();
  }

  // Sorting only changes display order; each post keeps its chronological number.
  sortButtons.forEach((button) => {
    button.addEventListener("click", () => setSortOrder(button.dataset.sort));
  });

  function showError(message) {
    list.replaceChildren();
    const error = document.createElement("div");
    error.className = "error-state";
    const title = document.createElement("strong");
    title.textContent = "게시글 목록을 불러오지 못했습니다.";
    const detail = document.createElement("span");
    detail.textContent = message;
    const repoLink = document.createElement("a");
    repoLink.className = "text-link";
    repoLink.href = `https://github.com/${REPOSITORY.owner}/${REPOSITORY.name}/tree/${REPOSITORY.branch}/${REPOSITORY.directory}`;
    repoLink.target = "_blank";
    repoLink.rel = "noopener noreferrer";
    repoLink.textContent = "GITHUB에서 TIL 보기 ↗";
    error.append(title, detail, repoLink);
    list.append(error);
    list.setAttribute("aria-busy", "false");
    count.textContent = "—";
  }

  function normalizeIndexedPost(item) {
    if (!item || typeof item !== "object") return null;
    const path = String(item.path || "");
    const date = String(item.date || "");
    if (!path.startsWith(`${REPOSITORY.directory}/`) || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
    const title = String(item.title || "").trim() || getPostTitle(path.split("/").pop());
    return {
      path,
      date,
      title,
      memo: String(item.memo || "").trim(),
      category: getCategory(title),
      notionPageId: String(item.notion_page_id || "")
    };
  }

  async function loadCanonicalIndex() {
    // The deploy workflow builds this file from all merged TIL Markdown files.
    // It resolves duplicate exports of the same Notion page without deleting old .md files.
    const response = await fetch(`${indexUrl}?v=${Date.now()}`, {
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    if (!response.ok) throw new Error(`blog-index.json 응답 오류 (${response.status})`);
    const data = await response.json();
    if (!data || !Array.isArray(data.posts)) throw new Error("blog-index.json 형식이 올바르지 않습니다.");

    const posts = data.posts.map(normalizeIndexedPost).filter(Boolean);
    posts.sort((a, b) => b.date.localeCompare(a.date) || a.path.localeCompare(b.path));
    posts.forEach((post, index) => {
      post.number = posts.length - index;
    });
    return {
      posts,
      totalCount: Number.isFinite(data.total_count) ? data.total_count : posts.length
    };
  }

  async function loadLegacyTree() {
    // Backward compatibility while the first canonical index is being deployed.
    const response = await fetch(apiUrl, {
      headers: { Accept: "application/vnd.github+json" },
      cache: "no-store"
    });
    if (!response.ok) {
      if (response.status === 403 || response.status === 429) {
        throw new Error("GitHub API 요청 한도에 도달했을 수 있습니다. 잠시 후 다시 방문해 주세요.");
      }
      throw new Error(`GitHub 응답 오류 (${response.status})`);
    }

    const data = await response.json();
    if (!Array.isArray(data.tree)) throw new Error("저장소 파일 목록을 확인할 수 없습니다.");
    if (data.truncated) throw new Error("GitHub가 파일 목록을 일부만 반환했습니다. TIL 폴더에서 확인해 주세요.");

    const posts = data.tree
      .filter((item) => item.type === "blob")
      .filter((item) => item.path.startsWith(`${REPOSITORY.directory}/`))
      .filter((item) => /\.md$/i.test(item.path))
      .map(toPost)
      .filter(Boolean)
      .sort((a, b) => b.date.localeCompare(a.date) || b.path.localeCompare(a.path));

    posts.forEach((post, index) => {
      post.number = posts.length - index;
    });
    const visiblePosts = IS_ARCHIVE_PAGE ? posts : posts.slice(0, MAX_HOME_POSTS);
    const postsWithMemo = await loadMemosWithConcurrency(visiblePosts, 8);
    return { posts: postsWithMemo, totalCount: posts.length };
  }

  async function loadPosts() {
    // A new cache key invalidates the previous filename-derived list.
    try {
      const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
      if (cached && Date.now() - cached.savedAt < CACHE_DURATION && Array.isArray(cached.posts)) {
        loadedPosts = cached.posts;
        loadedTotalCount = Number.isFinite(cached.totalCount) ? cached.totalCount : cached.posts.length;
        postsReady = true;
        renderSortedPosts();
        return;
      }
    } catch (_) {
      // Continue with a fresh request if storage is unavailable or malformed.
    }

    try {
      let result;
      try {
        result = await loadCanonicalIndex();
      } catch (indexError) {
        console.warn("Canonical blog index is not available yet; using legacy GitHub tree:", indexError);
        result = await loadLegacyTree();
      }

      const visiblePosts = IS_ARCHIVE_PAGE ? result.posts : result.posts.slice(0, MAX_HOME_POSTS);
      loadedPosts = visiblePosts;
      loadedTotalCount = result.totalCount;
      postsReady = true;

      try {
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ savedAt: Date.now(), posts: loadedPosts, totalCount: loadedTotalCount })
        );
      } catch (_) {
        // Storage may be disabled; the page still works without caching.
      }
      renderSortedPosts();
    } catch (error) {
      console.error("Blog post loading failed:", error);
      showError(error instanceof Error ? error.message : "네트워크 연결을 확인해 주세요.");
    }
  }

  loadPosts();
})();
