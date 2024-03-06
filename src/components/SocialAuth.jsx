import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialAuth = () => {
  return (
    <div className="mb-2 flex items-center justify-between gap-2 text-center">
      <button
        className="group flex w-full items-center justify-center gap-2 rounded border border-green-600 p-2 hover:bg-green-800"
        type="button"
      >
        <span>
          <FcGoogle />
        </span>
        <span className="font-bold text-green-500 group-hover:text-gray-50">
          Google
        </span>
      </button>
      <button
        className="group flex w-full items-center justify-center gap-2 rounded border border-gray-50 p-2 hover:bg-gray-300"
        type="button"
      >
        <span className="text-gray-50 group-hover:text-black">
          <FaGithub />
        </span>
        <span className="font-bold text-gray-50 group-hover:text-black">
          Github
        </span>
      </button>
    </div>
  );
};

export default SocialAuth;
