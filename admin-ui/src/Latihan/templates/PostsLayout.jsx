import { NavLink, Outlet } from "react-router-dom";

function PostsLayout() {
  return (
    <div className="min-h-screen bg-special-mainBg">
      <header className="border-b border-gray-05 bg-white shadow-sm">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
        >
          <NavLink
            className="text-lg font-bold text-primary"
            to="/posts"
          >
            Post Cards
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium ${
                isActive ? "bg-special-mainBg text-primary" : "text-secondary"
              }`
            }
            end
            to="/posts"
          >
            Semua post
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default PostsLayout;
