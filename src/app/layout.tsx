import { Suspense } from 'react';
import './globals.css';
import Providers from './providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              Cargando...
            </div>
          }
        >
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
