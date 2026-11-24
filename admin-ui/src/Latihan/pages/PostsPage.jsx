import { useEffect, useMemo, useState } from "react";
import { getPosts } from "../services.js";
import MoleculeFormField from "../molecules/MoleculeFormField.jsx";
import PostGrid from "../organisms/PostGrid.jsx";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase();

    if (!query) {
      return posts;
    }

    return posts.filter(
      ({ title, body }) =>
        title.toLocaleLowerCase().includes(query) ||
        body.toLocaleLowerCase().includes(query),
    );
  }, [posts, searchTerm]);

  return (
    <main className="px-4 py-8 sm:px-6">
      <section
        aria-labelledby="posts-heading"
        className="mx-auto max-w-6xl"
      >
        <h1
          className="mb-6 text-center text-2xl font-bold text-primary"
          id="posts-heading"
        >
          Daftar Post
        </h1>
        <div className="mb-6 max-w-md">
          <MoleculeFormField
            id="post-search"
            label="Cari post"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Cari berdasarkan judul atau isi"
            value={searchTerm}
          />
        </div>

        {isLoading && (
          <p className="text-center text-sm text-secondary" role="status">
            Memuat post...
          </p>
        )}
        {errorMessage && (
          <p className="text-center text-sm text-special-red" role="alert">
            {errorMessage}
          </p>
        )}
        {!isLoading && !errorMessage && (
          <div aria-busy={isLoading}>
            <PostGrid posts={filteredPosts} />
          </div>
        )}
      </section>
    </main>
  );
}

export default PostsPage;
