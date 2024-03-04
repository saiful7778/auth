import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login - authentication",
  description: "This is user login page.",
};

const LoginPage = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Login</h2>
      <LoginForm />
      <p className="text-center">
        <Link className="link" href="/authentication/register">
          Don{`'`}t have an account?
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
