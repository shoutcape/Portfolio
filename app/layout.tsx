import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Preahvihear, Titillium_Web } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from "next";

const preahvihear = Preahvihear({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-preahvihear'
})

const titilium = Titillium_Web({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium'
})

export const metadata: Metadata = {
    title: "Ville Kautiainen",
    description: "Software Development Portfolio of Ville Kautiainen",
    keywords: ["Ville Kautiainen", "Software Development", "Software", "Student"]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={`${preahvihear.variable} ${titilium.variable}`}>
      <body className="font-titillium">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
