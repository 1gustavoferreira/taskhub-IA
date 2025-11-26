// app/dashboard/dashboard.tsx
export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Coluna To Do */}
      <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4 text-purple-600">📝 To Do</h3>
        <div className="space-y-3">
          <div className="bg-gray-100 p-3 rounded border-l-4 border-purple-400">
            Exemplo de tarefa pendente
          </div>
        </div>
      </section>

      {/* Coluna In Progress */}
      <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4 text-yellow-600">⚙️ In Progress</h3>
        <div className="space-y-3">
          <div className="bg-gray-100 p-3 rounded border-l-4 border-yellow-400">
            Exemplo de tarefa em andamento
          </div>
        </div>
      </section>

      {/* Coluna Done */}
      <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4 text-green-600">✅ Done</h3>
        <div className="space-y-3">
          <div className="bg-gray-100 p-3 rounded border-l-4 border-green-400">
            Exemplo de tarefa concluída
          </div>
        </div>
      </section>
    </div>
  )
}
