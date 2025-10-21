// src/components/Head.tsx
import { useEffect } from "react";

interface HeadProps {
  title: string;
  favicon?: string; // optional, defaults to "/favicon.png"
}

export default function Head({ title, favicon = "/lt.png" }: HeadProps) {
  useEffect(() => {
    // Set the page title
    document.title = title;

    // Set the favicon
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (link) {
      link.href = favicon; // update existing favicon
    } else {
      link = document.createElement("link");
      link.rel = "icon";
      link.href = favicon; // set favicon
      document.head.appendChild(link);
    }
  }, [title, favicon]);

  return null; // This component does not render anything visible
}
