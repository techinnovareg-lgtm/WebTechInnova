import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Innova | Transformación Digital y Desarrollo Full-Stack",
  description: "Soluciones robustas de software a medida, automatización RPA con UiPath y plantillas Excel avanzadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
