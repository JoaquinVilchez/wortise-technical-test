'use client';

export default function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Ingrese su email"
          className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
        />
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Ingrese su contraseña"
          className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Iniciar sesión
      </button>
      <div className="text-center">
        <p>
          ¿No tienes cuenta?{' '}
          <a href="signup" className="text-blue-600 hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </form>
  );
}
