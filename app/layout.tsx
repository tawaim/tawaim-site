import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "tawaim",
  description: "projects, resume, blog",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "tawaim",
    description: "projects, resume, blog",
    url: "https://tawaim.com",
    siteName: "tawaim.com",
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