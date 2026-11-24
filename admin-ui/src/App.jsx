import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import RouteErrorPage from "./pages/error.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SignInPage from "./pages/signIn.jsx";
import SignUpPage from "./pages/signUp.jsx";

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-special-mainBg px-4">
      <div className="rounded-xl border border-gray-05 bg-white p-8 text-center shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-primary">Authentication</h1>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-white"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="rounded-md border border-primary px-8 py-3 text-sm font-medium text-primary"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <SignInPage />,
      },
      {
        path: "register",
        element: <SignUpPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
