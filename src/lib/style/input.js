/**
 * This is HTML input custom style with error state
 */
const style = {
  base: "w-full h-10 appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50",
  label:
    "text-sm ml-1 relative font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  error: "border-red-600 text-red-600 placeholder:text-red-500",
};

export { style as input };
