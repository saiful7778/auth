import Button from "@/components/utilities/Button";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-9xl font-bold">
        404<span className="text-accent-color">!</span>
      </h1>
      <p className="text-gray-400">Page not found</p>
      <p className="text-gray-400">
        Sorry, the page you{`'`}re looking for doesn{`'`}t exist!
      </p>
      <Button variant="primary" href="/">
        Return Home
      </Button>
    </div>
  );
};

export default NotFound;
