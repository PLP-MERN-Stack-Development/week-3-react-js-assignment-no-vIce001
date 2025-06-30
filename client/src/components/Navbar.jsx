import { Avatar, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="w-full bg-card shadow flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
        <Link to="/" className="font-bold text-lg">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API Data</Link>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link to="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/tasks">Tasks</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/api">API Data</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </Button>
      </div>
    </nav>
  );
}