const fetchPartial = async (path) => {
  const response = await fetch(path, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`Cannot load partial: ${path} (${response.status})`);
  }

  return response.text();
};

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Cannot load script: ${src}`));
    document.body.appendChild(script);
  });
};

const loadLayout = async () => {
  const host = document.getElementById("mainLayoutHost");
  if (!host) return;

  try {
    const [shell, sideHead, slidesTrack, controlBar] = await Promise.all([
      fetchPartial("partials/main-layout.html"),
      fetchPartial("partials/layout/side-head.html"),
      fetchPartial("partials/layout/slides-track.html"),
      fetchPartial("partials/layout/control-bar.html"),
    ]);

    host.innerHTML = shell;

    const sideHeadHost = document.getElementById("sideHeadHost");
    const slidesTrackHost = document.getElementById("slidesTrackHost");
    const controlBarHost = document.getElementById("controlBarHost");

    if (!sideHeadHost || !slidesTrackHost || !controlBarHost) {
      throw new Error("Layout shell placeholders are missing");
    }

    sideHeadHost.innerHTML = sideHead;
    slidesTrackHost.innerHTML = slidesTrack;
    controlBarHost.innerHTML = controlBar;

    await loadScript("js/portfolio-inline.js");
  } catch (error) {
    console.error(error);
    host.innerHTML =
      '<main class="layout" id="mainContent" tabindex="-1"><section class="shell"><p>Không thể tải nội dung chính. Hãy chạy trang bằng local server (Live Server) hoặc hosting HTTP.</p></section></main>';
  }
};

loadLayout();
