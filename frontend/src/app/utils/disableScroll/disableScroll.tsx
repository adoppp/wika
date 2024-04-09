"use client";

import { useEffect } from "react";

export default function DisableScroll() {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return null;
}