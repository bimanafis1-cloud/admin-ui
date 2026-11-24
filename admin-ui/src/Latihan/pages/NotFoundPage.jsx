import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="px-4 py-16 text-center">
      <h1 className="mb-3 text-2xl font-bold text-defaultBlack">
        Halaman tidak ditemukan
      </h1>
      <Link className="font-medium text-primary hover:underline" to="/posts">
        Kembali ke daftar post
      </Link>
    </main>
  );
}

export default NotFoundPage;
