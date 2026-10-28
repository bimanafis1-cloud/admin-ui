import { useEffect, useState } from "react";
import PostCard from "./PostCard.jsx";
import { getPosts } from "./Services.js";

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const loadedPosts = await getPosts(controller.signal);
        setPosts(loadedPosts);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Post gagal dimuat. Silakan coba lagi.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadPosts();

    return () => controller.abort();
  }, []);

  return (
    <main className="min-h-screen bg-special-mainBg px-4 py-8 sm:px-6">
      <section
        aria-labelledby="posts-heading"
        className="mx-auto max-w-5xl"
      >
        <h1
          className="mb-6 text-center text-2xl font-bold text-blue-700"
          id="posts-heading"
        >
          Post Cards
        </h1>

        {isLoading && (
          <p className="text-center text-sm text-gray-600" role="status">
            Memuat post...
          </p>
        )}
        {errorMessage && (
          <p className="text-center text-sm text-special-red" role="alert">
            {errorMessage}
          </p>
        )}
        <div
          aria-busy={isLoading}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Exercise;
