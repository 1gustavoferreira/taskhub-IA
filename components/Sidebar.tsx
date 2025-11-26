// components/Sidebar.tsx
import Link from 'next/link'
import { routes } from '../lib/routes'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
      <h2 className="text-lg font-semibold tracking-wide">Menu</h2>
      <nav className="flex flex-col space-y-3">
        <Link href={routes.home} className="hover:text-purple-400 transition">Tarefas</Link>
        <Link href={routes.stats} className="hover:text-purple-400 transition">Estatísticas</Link>
        <Link href={routes.settings} className="hover:text-purple-400 transition">Configurações</Link>
      </nav>
    </aside>
  )
}
