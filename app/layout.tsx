import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dheeraj Kaushik | Full Stack Developer",
  description: "This is the portfolio of Dheeraj Kaushik, a full stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg-primary)]">
        {children}
      </body>
    </html>
  );
}
