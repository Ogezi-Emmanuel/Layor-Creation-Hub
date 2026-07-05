import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: {
    default: "Layor Creation Hub | Haute Couture & Fashion Academy",
    template: "%s | Layor Creation Hub"
  },
  description: "Where Elegance Meets Mastery. Discover our luxury Haute Couture & Bridal Studio and renowned Fashion Design Academy in Lagos, Nigeria.",
  keywords: ["haute couture", "bridal gowns", "bespoke fashion", "fashion design academy", "Nigeria", "Lagos"],
  authors: [{ name: "Layor Creation Hub" }],
  openGraph: {
    title: "Layor Creation Hub | Haute Couture & Fashion Academy",
    description: "Where Elegance Meets Mastery. Discover our luxury Haute Couture & Bridal Studio and renowned Fashion Design Academy in Lagos, Nigeria.",
    url: "https://layorcreationhub.com",
    siteName: "Layor Creation Hub",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layor Creation Hub | Haute Couture & Fashion Academy",
    description: "Where Elegance Meets Mastery. Discover our luxury Haute Couture & Bridal Studio and renowned Fashion Design Academy in Lagos, Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#1A1A1A] text-white min-h-screen">
        <ErrorBoundary>
          <Navbar />
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
