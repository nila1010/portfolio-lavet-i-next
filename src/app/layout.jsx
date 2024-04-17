import Navigation from "./components/Navigation";
import "./globals.css";
import { PT_Sans } from "next/font/google";

const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolie site fra Nicolai, MMD KEA - Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="bg-darkblue text-white ">
        <header>
          <Navigation />
        </header>
        <main className="px-8 md:px-16 grid gap-20 lg:gap-40">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
