import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WeatherNow",
  description: "Simple Weather Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-cols-12 h-screen`}>
        <left className="col-span-1 px-6 py-6">
          <Sidebar />
        </left>
        <main className="col-span-11 p-6 px-0 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
