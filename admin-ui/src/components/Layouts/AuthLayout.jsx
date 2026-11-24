import PropTypes from "prop-types";
import Logo from "../Elements/Logo.jsx";

function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-special-mainBg px-4 py-10">
      <section className="w-full max-w-md rounded-xl border border-gray-05 bg-white p-6 shadow-lg sm:p-8">
        <Logo />
        <div className="mb-6 mt-5 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-primary">{title}</h1>
          <p className="mt-2 text-sm text-secondary">{subtitle}</p>
        </div>
        {children}
      </section>
    </main>
  );
}

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
