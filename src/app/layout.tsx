import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "The Estimation Game",
  description: "The most fun you will ever have estimating",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="bg-appBackground flex min-h-screen flex-col text-lightText text-lg items-center justify-center p-2">
          {children}
        </main>
      </body>
    </html>
  );
}
