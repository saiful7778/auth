"use client";
import Button from "@/components/utilities/Button";
import { useEffect } from "react";

const GlobalError = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden">
      <h2 className="text-3xl font-bold">
        Something went <span className="text-red-600">wrong!</span>
      </h2>
      <div>
        <Button onClick={() => reset()} variant="cancel">
          Refrash
        </Button>
      </div>
    </div>
  );
};

export default GlobalError;
