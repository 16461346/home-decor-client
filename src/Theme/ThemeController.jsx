import { useEffect, useState } from "react";

const ThemeController = () => {
  const [theme, setTheme] = useState(() => {
    // Lazy initialization to avoid flicker
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme on mount & whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <label className="flex pl-3 cursor-pointer items-center gap-2">
      <span className="text-sm font-semibold">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </span>

      <input
        type="checkbox"
        className="toggle toggle-primary"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
    </label>
  );
};

export default ThemeController;
