"use client";

import { useEffect } from 'react';

export default function ChatbaseScript() {
  useEffect(() => {
    // Only load chatbase if not already loaded
    if (document.getElementById("Ocnxh8GmT_YZhUBeJg2pD")) {
      return;
    }

    // Delay loading to improve initial render performance
    const timer = setTimeout(() => {
      (function() {
        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...args: any[]) => {
            if (!window.chatbase.q) {
              window.chatbase.q = [];
            }
            window.chatbase.q.push(args);
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if (prop === "q") {
                return target.q;
              }
              return (...args: any[]) => target(prop, ...args);
            }
          });
        }
        
        const onLoad = function() {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = "Ocnxh8GmT_YZhUBeJg2pD";
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
          
          // Use requestAnimationFrame for better performance
          requestAnimationFrame(() => {
            setTimeout(() => {
              const iframe = document.querySelector('#chatbase-bubble-button') as HTMLElement;
              if (iframe) {
                iframe.style.bottom = "50px";
                iframe.style.position = "fixed";
                iframe.style.right = "20px";
                iframe.style.zIndex = "9999";
              }
            }, 1000);
          });
        };
        
        if (document.readyState === "complete") {
          onLoad();
        } else {
          window.addEventListener("load", onLoad, { once: true });
        }
      })();
    }, 3000); // Load after 3 seconds to prioritize initial render

    return () => {
      clearTimeout(timer);
      const script = document.getElementById("Ocnxh8GmT_YZhUBeJg2pD");
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
