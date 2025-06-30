import { useEffect, useState } from "react";
import { Card } from "../components/ui/card";
import Button from "../components/Button";
import { fetchPosts } from "../utils/api";

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchPosts(page)
      .then((data) => {
        setPosts(data);
        setError("");
      })
      .catch(() => setError("Failed to load posts"))
      .finally(() => setLoading(false));
  }, [page]);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">API Data</h2>
      <input
        className="border rounded px-2 py-1 mb-4 w-full"
        placeholder="Search posts"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {filtered.map((post) => (
          <li key={post.id} className="mb-2">
            <div className="font-semibold">{post.title}</div>
            <div className="text-sm text-gray-500">{post.body}</div>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4">
        <Button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Prev
        </Button>
        <span>Page {page}</span>
        <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>
    </Card>
  );
}