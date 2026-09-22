import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camila Pereira Beauty | Cílios, Sobrancelhas e Estética",
  description:
    "Realce sua beleza com extensão de cílios, design de sobrancelhas, brow lamination, lash lifting, limpeza de pele e micropigmentação.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
