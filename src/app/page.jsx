import Button from "@/components/utilities/Button";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="flex h-[calc(100vh-1rem)] w-full flex-col items-center justify-center gap-4 overflow-hidden text-center">
      <div className="bg-blue-blob absolute -left-96 top-0 z-0 h-[300px] w-[900px] rotate-45 rounded-full blur-[100px] filter"></div>
      <h1 className="text-6xl font-bold uppercase">Welcome to home page</h1>
      <p className="text-gray-400">
        This is simple authentication project build on <br />{" "}
        <Link className="link" href="https://nextjs.org" target="_blank">
          next.js
          <span className="ml-1 inline-block">
            <FaArrowUpRightFromSquare size={12} />
          </span>
        </Link>{" "}
        and{" "}
        <Link className="link" href="https://authjs.dev" target="_blank">
          auth.js
          <span className="mx-1 inline-block">
            <FaArrowUpRightFromSquare size={12} />
          </span>
          (an authentication package)
        </Link>
      </p>
      <div className="flex items-center justify-center gap-2">
        <Button variant="primary" href="/authentication/login">
          Login
        </Button>
        <Button variant="primary-outline" href="/authentication/register">
          Register
        </Button>
      </div>
      <div className="bg-red-blob absolute -right-96 top-28 z-0 h-[300px] w-[900px] -rotate-[20deg] rounded-full blur-[100px] filter"></div>
    </div>
  );
};

export default HomePage;
