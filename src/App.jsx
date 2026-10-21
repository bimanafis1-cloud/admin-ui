import "./App.css";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-special-mainBg px-4 py-10">
      <section className="w-full max-w-sm" aria-labelledby="signin-title">
        <div className="flex justify-center">
          <span className="font-poppins text-4xl font-bold tracking-wide text-primary">
            Finebank.io
          </span>
        </div>

        <div className="mt-16">
          <h1
            id="signin-title"
            className="mb-8 text-center text-2xl font-bold text-defaultBlack"
          >
            Sign In
          </h1>

          <form onSubmit={(event) => event.preventDefault()}>
            <div className="mb-6">
              <label
                className="mb-2 block text-sm text-gray-01"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full rounded-md border border-gray--03 bg-white py-3 pl-4 text-base text-defaultBlack focus:border-black focus:outline-none focus:ring-0"
                id="email"
                name="email"
                type="text"
                autoComplete="username"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="mb-2 block text-sm text-gray-01"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full rounded-md border border-gray--03 bg-white py-3 pl-4 text-base text-defaultBlack focus:border-black focus:outline-none focus:ring-0"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-3 flex items-center justify-between">
              <label
                className="ml-6 flex items-center gap-2 text-sm text-gray--01"
                htmlFor="remember-me"
              >
                <input
                  className="accent-primary"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                Remember me
              </label>
              <a
                className="text-sm text-primary hover:underline"
                href="#forgot-password"
              >
                Forgot Password?
              </a>
            </div>

            <button
              className="h-12 w-full rounded-md bg-primary px-6 font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-9 px-7 text-center">
            <div className="border-t border-gray-05" aria-hidden="true" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-special-mainBg px-2 text-sm text-gray-01">
              or sign in with
            </span>
          </div>

          <button
            className="mb-8 flex h-12 w-full items-center justify-center gap-3 rounded-md border border-gray-05 bg-white font-semibold text-secondary transition-colors hover:bg-gray-06 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4285F4"
                d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
              />
              <path
                fill="#34A853"
                d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2A20 20 0 0 0 24 44Z"
              />
              <path
                fill="#FBBC05"
                d="M12.6 27.5a12 12 0 0 1 0-7v-5.2H5.8a20 20 0 0 0 0 17.4l6.8-5.2Z"
              />
              <path
                fill="#EA4335"
                d="M24 12.1c3 0 5.6 1 7.7 3.1l5.8-5.8A19.4 19.4 0 0 0 24 4a20 20 0 0 0-18.2 11.3l6.8 5.2c1.6-4.8 6.1-8.4 11.4-8.4Z"
              />
            </svg>
            Sign In with Google
          </button>

          <p className="text-center text-sm text-gray-01">
            Don&apos;t have an account?{" "}
            <a
              className="font-semibold text-primary hover:underline"
              href="#create-account"
            >
              Create an Account
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
