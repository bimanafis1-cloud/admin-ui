import { Link } from "react-router-dom";
import Button from "../Elements/Button.jsx";
import CheckBox from "../Elements/CheckBox.jsx";
import LabeledInput from "../Elements/LabeledInput.jsx";

function FormSignUp() {
  return (
    <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
      <LabeledInput
        id="username"
        label="Username"
        placeholder="Masukkan username"
        autoComplete="username"
      />
      <LabeledInput
        id="email"
        label="Email"
        type="email"
        placeholder="nama@email.com"
        autoComplete="email"
      />
      <LabeledInput
        id="password"
        label="Password"
        type="password"
        placeholder="Masukkan password"
        autoComplete="new-password"
      />

      <CheckBox
        id="terms"
        label="Saya menyetujui syarat dan ketentuan"
      />
      <Button type="submit">Create Account</Button>

      <p className="text-center text-sm text-secondary">
        Sudah punya akun?{" "}
        <Link className="font-medium text-primary hover:underline" to="/login">
          Sign In Here
        </Link>
      </p>
    </form>
  );
}

export default FormSignUp;
