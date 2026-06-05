import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StepIn360 – Premium Virtual Tours & Web Design",
  description:
    "Immersive websites with built-in 360° tours for hotels, guest houses, gyms and cafés. We design your site and capture your space — so people can step inside before they ever visit.",
  metadataBase: new URL("https://www.stepin360.net"),
  openGraph: {
    title: "StepIn360 – Premium Virtual Tours & Web Design",
    description: "Immersive websites with built-in 360° tours that increase bookings and trust.",
    type: "website",
    images: ["/images/preview-sithujaya-green.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans grain antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
