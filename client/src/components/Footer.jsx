import { Card } from "./ui/card";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <Card className="flex flex-col items-center gap-2 py-4 bg-background">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Chris William. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://vercel.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">
            Vercel
          </a>
        </div>
      </Card>
    </footer>
  );
}