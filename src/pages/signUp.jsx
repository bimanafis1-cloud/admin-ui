import FormSignUp from "../components/Fragments/FormSignUp.jsx";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";

function SignUpPage() {
  return (
    <AuthLayout
      title="Create account"
      subtitle="Daftar untuk membuat akun baru."
    >
      <FormSignUp />
    </AuthLayout>
  );
}

export default SignUpPage;
