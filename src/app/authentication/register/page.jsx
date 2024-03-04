import Link from "next/link";
import RegisterForm from "./RegisterForm";

export const metadata = {
  title: "Register - authentication",
  description: "This is user register page.",
};

const RegisterPage = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Register</h2>
      <RegisterForm />
      <p className="text-center">
        <Link className="link" href="/authentication/login">
          Already have an account?
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
