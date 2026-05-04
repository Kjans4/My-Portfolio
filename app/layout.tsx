import type { Metadata } from "next";
import "../styles/globals.css";
import PixelCursor from "@/components/PixelCursor/PixelCursor";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export const metadata: Metadata = {
  title: "Keshier Jan Pialan | IT Graduate Portfolio",        // [REPLACE] Your name
  description: "Full-Stack Developer & IT Graduate based in Davao City, Philippines.", // [REPLACE]
  openGraph: {
    title: "Keshier Jan Pialan | Portfolio",
    description: "Full-Stack Developer & IT Graduate",
    url: "https://keshierjanpilan.vercel.app",              // [REPLACE]
    siteName: "KeshierJan Portfolio",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>

      <body>
        <LoadingScreen />
        <PixelCursor />
        {children}
        <ScrollToTop />
      </body>

    </html>
  );
}