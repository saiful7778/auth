import Link from "next/link";
import ForgetForm from "./ForgetForm";

export const metadata = {
  title: "Forget password - authentication",
  description: "This is user forget password page.",
};

const ForgetPassword = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Forget password</h2>
      <ForgetForm />
      <p className="text-center">
        <Link className="link mx-0.5" href="/authentication/register">
          Register
        </Link>
        <Link className="link mx-0.5" href="/authentication/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
