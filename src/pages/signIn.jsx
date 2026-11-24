import FormSignIn from "../components/Fragments/FormSignIn.jsx";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";

function SignInPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Masuk ke akun kamu untuk melanjutkan."
    >
      <FormSignIn />
    </AuthLayout>
  );
}

export default SignInPage;
