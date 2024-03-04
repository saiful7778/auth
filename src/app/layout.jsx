import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Authentication - project",
  description: "This is authentication project with next.js and auth.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-screen bg-gray-900 text-gray-50 overflow-x-hidden">
          <div className="container p-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
