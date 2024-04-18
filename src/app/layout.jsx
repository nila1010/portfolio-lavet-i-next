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
      <body className="bg-darkblue text-white scroll-smooth grid place-content-center">
        <header className="max-w-[1400px]">
          <Navigation />
        </header>
        <main className="px-8 md:px-16 grid gap-20 lg:gap-40 overflow-hidden max-w-[1400px]">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
