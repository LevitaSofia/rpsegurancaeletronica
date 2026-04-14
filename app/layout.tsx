import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600", "800"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "RP Sistemas - Segurança Inteligente",
  description: "Soluções avançadas em segurança, monitoramento e infraestrutura de TI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="bg-brand-dark text-white font-sans antialiased selection:bg-brand-neon selection:text-black">
        {children}
      </body>
    </html>
  );
}
