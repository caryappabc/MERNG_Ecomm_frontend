import './globals.css'

export const metadata = {
  title: 'HMH | Heavy Metal Heaven',
  description: 'Unleash your inner metalhead',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
