"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button className="card rounded-xl p-2" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> 
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
