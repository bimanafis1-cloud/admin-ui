const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts(signal) {
  const response = await fetch(POSTS_API_URL, { signal });

  if (!response.ok) {
    throw new Error(`Gagal mengambil post (${response.status}).`);
  }

  const posts = await response.json();

  return posts.map(({ id, title, body }) => ({ id, title, body }));
}
