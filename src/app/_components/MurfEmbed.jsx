import React, { useEffect } from "react";

const MurfEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://murf.ai/embeds/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      className="murf-embed"
      width="560"
      height="102"
      src="https://murf.ai/embeds/index.html?embedId=mer03uel"
      allowFullScreen
      title="Murf Embed Player"
      style={{ border: "none" }}
    ></iframe>
  );
};

export default MurfEmbed;
