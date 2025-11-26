// components/Header.tsx
export default function Header() {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full bg-purple-600" />
        <h1 className="text-2xl font-bold text-purple-600">TaskHub</h1>
      </div>
      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
        Perfil
      </button>
    </header>
  )
}
