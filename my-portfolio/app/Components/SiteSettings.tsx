"use client";

import { useEffect } from "react";

export default function SiteSettings() {
  useEffect(() => {
    fetch("/api/settings")
      .then((response) => response.ok ? response.json() : null)
      .then((settings: { headingFont?: string } | null) => {
        if (settings?.headingFont) {
          document.documentElement.style.setProperty("--site-heading-font", `"${settings.headingFont}", sans-serif`);
          document.documentElement.style.setProperty("--font-ubuntusansmono", `"${settings.headingFont}", sans-serif`);
        }
      })
      .catch(() => undefined);
  }, []);

  return null;
}
