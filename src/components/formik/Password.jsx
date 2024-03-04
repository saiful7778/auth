"use client";
import { useId, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Input from "./Input";
import { input } from "@/lib/style/input";

const Password = ({ placeholder, disabled, label, name }) => {
  const inputId = useId();
  const [showPass, setShowPass] = useState(false);

  return (
    <div>
      {label && (
        <label
          className={input.label}
          aria-disabled={disabled}
          aria-required={true}
          htmlFor={inputId}
        >
          {label}
          <span className="absolute -top-2 left-full text-lg text-red-500">
            *
          </span>
        </label>
      )}
      <div className="relative">
        <Input
          type={showPass ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          id={inputId}
          disabled={disabled}
        />
        <button
          onClick={() => setShowPass((l) => !l)}
          className="absolute right-2 top-0 z-30 p-2 text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          disabled={disabled}
        >
          {showPass ? <IoIosEye size={25} /> : <IoIosEyeOff size={25} />}
        </button>
      </div>
    </div>
  );
};

export default Password;
