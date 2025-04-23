'use client';

export default function SignUpForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="firstName">Nombre</label>
        <input
          type="text"
          id="firstName"
          placeholder="Ingrese su nombre"
          className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
        />
      </div>

      <div>
        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          id="lastName"
          placeholder="Ingrese su apellido"
          className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
        />
      </div>

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
      <div>
        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Ingrese nuevamente su contraseña"
          className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Registrarme
      </button>
      <div className="text-center">
        <p>
          ¿Ya tienes una cuenta?{' '}
          <a href="login" className="text-blue-600 hover:underline">
            Iniciar sesión
          </a>
        </p>
      </div>
    </form>
  );
}
