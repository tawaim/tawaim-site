import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://tawaim.com"),
  title: {
    default: "tawaim",
    template: "%s · tawaim",
  },
  description: "projects, resume, blog",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "tawaim",
    description: "projects, resume, blog",
    url: "https://tawaim.com",
    siteName: "tawaim.com",
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}