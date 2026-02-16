import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "ANR Dynamic Ventures",
  description: "Professional Accounting, Tax & Corporate Advisory Services",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "ANR Dynamic Ventures",
    description: "Professional Accounting, Tax & Corporate Advisory Services",
    siteName: "ANR Dynamic Ventures",
    url: "https://anrdyventures.com",
    images: [
      {
        url: "/opengraph-image.png",
        width: 400,
        height: 150,
        alt: "ANR Dynamic Ventures",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANR Dynamic Ventures",
    description: "Professional Accounting, Tax & Corporate Advisory Services",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
