export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">{children}</div>
    </main>
  );
}
