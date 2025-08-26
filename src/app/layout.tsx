"use client";

import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Navigator from "./_components/Navigator"
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
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

        document.body.appendChild(script);
        setTimeout(() => {
        const iframe = document.querySelector('#chatbase-bubble-button') as HTMLElement;
        if (iframe) {
          iframe.style.bottom = "50px";
          iframe.style.position = "fixed";
          iframe.style.right = "20px";
          iframe.style.zIndex = "9999";
        }
      }, 1000);
      };
      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    })();

    return () => {
      const script = document.getElementById("Ocnxh8GmT_YZhUBeJg2pD");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Navigator />
        <Footer />
      </body>
    </html>
  );
}