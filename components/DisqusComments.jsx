"use client";

import { useEffect } from "react";

const DISQUS_SHORTNAME = "ngocthien-blog";

const DisqusComments = ({ identifier, title, url }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config() {
          this.page.identifier = identifier;
          this.page.title = title;
          this.page.url = url;
        },
      });
      return;
    }

    if (!document.getElementById("dsq-embed-scr")) {
      const script = document.createElement("script");
      script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
      script.setAttribute("data-timestamp", Date.now().toString());
      script.id = "dsq-embed-scr";
      document.body.appendChild(script);
    }
  }, [identifier, title, url]);

  return <div id="disqus_thread" className="mt-12" />;
};

export default DisqusComments;
