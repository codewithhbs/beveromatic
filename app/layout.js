import "./globals.css";
import Script from "next/script";
import MainLayout from "@/components/MainLayout";
import CanonicalTag from "@/components/CanonicalTag";

export const metadata = {
  title: "India's No.1 Tea & Coffee Vending Machine Manufacturer",
  description: "India's No.1 vending machine brand for tea & coffee. Get premium blends with every cup. Buy now & upgrade your space with Beveromatic excellence",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({ children }) {

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="sAP_mBFe-1gOVyAsKRigxAI2pPK8hMv571HbhtLq7Y8" />
        <CanonicalTag baseUrl={baseUrl} />
        <Script id="tagurl" async src="https://www.googletagmanager.com/gtag/js?id=G-295P5LR5MX"></Script>
        <Script id="gtag-init">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-295P5LR5MX');`}
        </Script>

      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
