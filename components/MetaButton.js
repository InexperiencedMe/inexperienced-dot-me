"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MdArrowBack, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { usePathname } from "next/navigation";

export const MetaButton = (props) => {
  return (
    <div className="w-8 h-8 flex items-center justify-center rounded-md">
      {props.children}
    </div>
  );
};

export function BackButton() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <div className="w-8 h-8" />;
  }
  return (
    <MetaButton>
      <Link href={"/"}>
        <MdArrowBack size={26} />
      </Link>
    </MetaButton>
  );
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      const theme = isDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [isDark]);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      type="button"
      className="rounded-full flex items-center justify-center cursor-pointer"
      onClick={handleToggle}
    >
      {isDark ? <MdOutlineLightMode size={26} /> : <MdOutlineDarkMode size={26} />}
    </button>
  );
}