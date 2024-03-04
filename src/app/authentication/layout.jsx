export default function AuthenticationLayout({ children }) {
  return (
    <div className="flex h-[calc(100vh-1rem)] w-full items-center justify-center overflow-hidden">
      <div className="absolute -left-96 top-0 z-0 h-[300px] w-[900px] rotate-45 rounded-full bg-blue-blob blur-[100px] filter"></div>
      <div className="relative z-[1] w-full max-w-lg rounded-md border border-gray-700 bg-gray-800/20 p-4 backdrop-blur-md">
        {children}
      </div>
      <div className="absolute -right-96 top-28 z-0 h-[300px] w-[900px] -rotate-[20deg] rounded-full bg-red-blob blur-[100px] filter"></div>
    </div>
  );
}
