export default function Footer() {
  return (
    <footer className="text-center py-4 bg-gray-100 dark:bg-gray-900 mt-auto">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Chris William. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>
      </div>
    </footer>
  );
}