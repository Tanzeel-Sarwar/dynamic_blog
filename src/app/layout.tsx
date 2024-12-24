import './globals.css'
import { Inter } from 'next/font/google'

// Use the Inter font from Google Fonts
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Programming Blog',
  description: 'A blog about web development and programming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4 mb-4">
          <div className="container mx-auto">
            <a href="/" className="text-2xl font-bold">My Programming Blog</a>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

