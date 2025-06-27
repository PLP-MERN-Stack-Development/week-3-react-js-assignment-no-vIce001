export async function fetchPosts(page = 1) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}