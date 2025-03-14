import Header from "@/components/layout/header/header";
import { Racing_Sans_One, Raleway } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";

const raleway = Raleway({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  variable: "--font-raleway",
});

const racingSansOne = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-racing-sans-one",
});

// app/layout.tsx
export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || "https://yourdomain.com"),
  title: {
    template: "FOSO | %s",
    default: "FOSO - Trang chủ",
  },
  description: "Mô tả chung cho toàn bộ website",
  openGraph: {
    type: "website",
    siteName: "FOSO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${racingSansOne.variable}`}>
      <body className={`${raleway.className} antialiased relative`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
