import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Öztürk Grup",
  description:
    "Öztürk Grup, inşaat, estetik danışmanlık ve hukuk bürosu hizmetleri sunan bir aile şirketidir. Profesyonel ve yenilikçi çözümlerimizle müşteri memnuniyetini ön planda tutuyoruz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
