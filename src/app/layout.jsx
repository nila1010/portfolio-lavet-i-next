import dynamic from "next/dynamic";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolie site fra Nicolai, MMD KEA - Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className="scroll-smooth">
      <body className="bg-darkblue text-white grid place-content-center">
        <header className="max-w-[1400px]">
          <Navigation />
        </header>
        <main className="px-8 md:px-16 grid gap-20 lg:gap-40 overflow-hidden max-w-[1400px]">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
