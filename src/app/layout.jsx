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
        <div className="main-bg relative min-h-screen w-full overflow-x-hidden bg-gray-900 p-2 text-gray-50">
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
