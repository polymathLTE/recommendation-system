import { Inter } from 'next/font/google'
import './globals.css'
import { AppContextProvider } from './context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Questionnaire for Felder and silvermann learning model classification',
  description: 'Created by Ajayi Toheeb Opeyemi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
