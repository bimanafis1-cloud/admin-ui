import { Link, useRouteError } from "react-router-dom";

function RouteErrorPage() {
  const error = useRouteError();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-special-mainBg px-4 text-center">
      <p className="mb-2 text-sm font-medium text-primary">Terjadi kesalahan</p>
      <h1 className="mb-2 text-3xl font-bold text-defaultBlack">
        Halaman tidak dapat dimuat
      </h1>
      <p className="mb-6 text-sm text-secondary">
        {error?.status
          ? `${error.status} | ${error.statusText || error.message}`
          : error?.message || "Silakan kembali ke daftar post."}
      </p>
      <Link
        className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700"
        to="/"
      >
        Kembali ke halaman utama
      </Link>
    </main>
  );
}

export default RouteErrorPage;
