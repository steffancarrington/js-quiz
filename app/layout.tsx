import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--heading-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "JavaScript Quiz for beginners",
  description: "Test your knowledge of JavaScript with this quiz for beginners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} ${merriweather.variable}`}>
        <main className="flex min-h-screen flex-col items-center gap-4 justify-between py-8 px-5 bg-gray-100 md:pt-12">
          <Header />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
