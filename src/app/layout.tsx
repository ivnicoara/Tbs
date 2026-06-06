import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thobass&Co | Restaurant Rădăuți",
  description: "Unul dintre cele mai vechi restaurante din Rădăuți. Pizza artizanală, înghețată naturală, gamă variată de bere. Comandă online sau rezervă o masă.",
  keywords: "restaurant radauti, pizza radauti, thobass, thobass&co, mancare italiana radauti",
  openGraph: {
    title: "Thobass&Co | Restaurant Rădăuți",
    description: "Gustos, sănătos și rapid. Pizza artizanală, înghețată naturală și cea mai mare gamă de bere din Rădăuți.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full antialiased">
      <body className="min-h-screen flex flex-col bg-[#0f0d0a] text-[#f5f0e8]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
