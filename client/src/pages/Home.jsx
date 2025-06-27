import Card from "../components/TaskCard";

export default function Home() {
  return (
    <Card>
      <h1 className="text-2xl font-bold mb-2">Welcome!</h1>
      <p>
        This is a React + Vite + Tailwind CSS starter demonstrating component architecture, hooks, and API integration.
      </p>
    </Card>
  );
}