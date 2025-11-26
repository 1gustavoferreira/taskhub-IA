// app/layout.tsx
import '../styles/globals.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export const metadata = {
  title: 'TaskHub AI',
  description: 'App de tarefas com Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="p-6 bg-white flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
