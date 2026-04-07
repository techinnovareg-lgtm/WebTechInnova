import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Tech Innova | Transformación Digital y Desarrollo Full-Stack",
  description: "Soluciones robustas de software a medida, automatización RPA con UiPath y plantillas Excel avanzadas.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Tech Innova | Transformación Digital",
    description: "Soluciones robustas de software a medida, automatización RPA y plantillas Excel.",
    url: "https://techinnova.tech",
    siteName: "Tech Innova",
    images: [{ url: "/images/stock/hero.jpg", width: 1200, height: 630, alt: "Tech Innova" }],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Innova | Transformación Digital",
    description: "Soluciones robustas de software a medida y automatización.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
