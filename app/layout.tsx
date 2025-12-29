import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const siteUrl = "https://brunalmeidapsi.com";
const title = "Bruna Almeida | Psicóloga Clínica (Psicanálise)";
const description = "Atendimento clínico com escuta ética, responsável e acolhedora. Agende sua sessão.";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Bruna Almeida",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Bruna Almeida",
    locale: "pt_BR",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Bruna Almeida - Psicóloga Clínica",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${playfairDisplay.variable} antialiased`}
      >
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
