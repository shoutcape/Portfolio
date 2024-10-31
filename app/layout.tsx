import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Preahvihear, Titillium_Web } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

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
