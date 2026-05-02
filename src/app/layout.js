import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Chahat didi This for you!",
  description: "A cute little website filled with compliments, surprises, and a heartfelt message made just for you and i also dont know what I am writing so forgive me if i cross my boundaries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-rose-50 antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
