import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mr. Chef Casoria — Paninoteca Artigianale dal 2014",
  description: "Mr. Chef è la paninoteca di riferimento a Casoria (NA). Panini artigianali, ingredienti freschi, opzioni Gluten Free. Ordina ora: 081 1957 1937.",
  keywords: "paninoteca, casoria, napoli, panini artigianali, hamburger, gluten free, mr chef",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
