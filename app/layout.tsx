import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I AM GLENN · Modernist Digital Experience",
  description: "Where modernist art principles meet digital innovation. A personal website merging Bauhaus, De Stijl, and Constructivism with contemporary web technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
