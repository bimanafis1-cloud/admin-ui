import { Link } from "react-router-dom";
import Button from "../Elements/Button.jsx";
import CheckBox from "../Elements/CheckBox.jsx";
import LabeledInput from "../Elements/LabeledInput.jsx";

function FormSignIn() {
  return (
    <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
      <LabeledInput
        id="username"
        label="Username"
        placeholder="Masukkan username"
        autoComplete="username"
      />
      <LabeledInput
        id="password"
        label="Password"
        type="password"
        placeholder="Masukkan password"
        autoComplete="current-password"
      />

      <div className="flex items-center justify-between">
        <CheckBox id="remember" label="Remember me" />
        <a className="text-sm font-medium text-primary hover:underline" href="#forgot-password">
          Forgot password?
        </a>
      </div>

      <Button type="submit">Login</Button>

      <Button type="button" variant="secondary">
        Continue with Google
      </Button>

      <p className="text-center text-sm text-secondary">
        Belum punya akun?{" "}
        <Link className="font-medium text-primary hover:underline" to="/register">
          Create an account
        </Link>
      </p>
    </form>
  );
}

export default FormSignIn;
