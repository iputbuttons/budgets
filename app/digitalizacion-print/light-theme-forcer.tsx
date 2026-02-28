"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function LightThemeForcer({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return <>{children}</>;
}
