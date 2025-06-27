import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex gap-4">
        <Link to="/" className="font-bold text-lg">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API Data</Link>
      </div>
      <button onClick={toggleTheme} className="ml-4">
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}