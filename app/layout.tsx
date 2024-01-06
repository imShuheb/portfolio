import { Montserrat } from 'next/font/google'
import '../styles/style.scss'
import "bootstrap/dist/css/bootstrap.css";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{ background: '#0a192f' }}>{children}</body>
    </html>
  )
}
