// app/login/login.tsx
export default function Login() {
  return (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">
          TaskHub - Login
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 space-y-2">
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
            Entrar com Google
          </button>
          <button className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition">
            Entrar com GitHub
          </button>
        </div>
      </div>
    </div>
  )
}
