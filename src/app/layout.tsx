import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Med Pathway - Healthcare Platform",
  description: "Emergency assistance, medical tourism, and online consultations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
