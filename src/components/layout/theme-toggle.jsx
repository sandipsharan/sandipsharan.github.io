"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
}

export function ThemeToggle() {
  const [theme, setThemeState] = useState("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const resolved =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    applyTheme(resolved);
    setThemeState(resolved);
  }, []);

  function onToggle() {
    const next = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    window.localStorage.setItem("theme", next);
    applyTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button type="button" aria-label="Toggle theme" className="theme-toggle" onClick={onToggle}>
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
