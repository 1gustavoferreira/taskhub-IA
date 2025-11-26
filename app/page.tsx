// app/page.tsx
export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <section className="bg-gray-200 p-4 rounded">
        <h3 className="font-semibold mb-2">📝 To Do</h3>
        <div className="text-sm text-gray-700">Placeholder de tarefas a fazer</div>
      </section>

      <section className="bg-gray-200 p-4 rounded">
        <h3 className="font-semibold mb-2">⚙️ In Progress</h3>
        <div className="text-sm text-gray-700">Placeholder de tarefas em progresso</div>
      </section>

      <section className="bg-gray-200 p-4 rounded">
        <h3 className="font-semibold mb-2">✅ Done</h3>
        <div className="text-sm text-gray-700">Placeholder de tarefas concluídas</div>
      </section>
    </div>
  )
}
