import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AtomCard from "../atoms/AtomCard.jsx";
import { getPostById } from "../services.js";

function PostDetailPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const id = Number(postId);

    setPost(null);
    setErrorMessage("");
    setIsLoading(true);

    async function loadPost() {
      if (!Number.isInteger(id) || id < 1) {
        setErrorMessage("Post tidak ditemukan.");
        setIsLoading(false);
        return;
      }

      try {
        const loadedPost = await getPostById(id, controller.signal);
        setPost(loadedPost);
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

    loadPost();

    return () => controller.abort();
  }, [postId]);

  return (
    <main className="px-4 py-8 sm:px-6">
      <section aria-labelledby="post-detail-heading" className="mx-auto max-w-3xl">
        <Link
          className="mb-6 inline-block text-sm font-medium text-primary hover:underline"
          to="/posts"
        >
          &larr; Kembali ke semua post
        </Link>
        {isLoading && (
          <p className="text-sm text-secondary" role="status">
            Memuat post...
          </p>
        )}
        {errorMessage && (
          <p className="text-sm text-special-red" role="alert">
            {errorMessage}
          </p>
        )}
        {post && (
          <AtomCard as="article">
            <h1
              className="mb-4 text-2xl font-bold text-defaultBlack"
              id="post-detail-heading"
            >
              {post.title}
            </h1>
            <p className="leading-relaxed text-secondary">{post.body}</p>
          </AtomCard>
        )}
      </section>
    </main>
  );
}

export default PostDetailPage;
