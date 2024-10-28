import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Preahvihear } from "next/font/google";

const preahvihear = Preahvihear({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-preahvihear'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html suppressHydrationWarning className={`${preahvihear.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
