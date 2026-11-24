import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-special-mainBg px-4 text-center">
      <h1 className="mb-2 text-3xl font-bold text-defaultBlack">404</h1>
      <p className="mb-6 text-sm text-secondary">Halaman tidak ditemukan.</p>
      <Link
        className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white"
        to="/"
      >
        Kembali ke halaman utama
      </Link>
    </main>
  );
}

export default NotFoundPage;
