import "./globals.css";
import type { Metadata } from "next";
import { geistMono, geistSans, vidaloka } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "Resume Genie - AI-Powered Resume & Cover Letter Builder",
  description: "Create optimized resumes and cover letters tailored to job descriptions using AI. Enhance your ATS score and track job applications seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
            ${vidaloka.variable}
            ${geistSans.variable}
            ${geistMono.variable}
            ${geistSans.className}
            antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
