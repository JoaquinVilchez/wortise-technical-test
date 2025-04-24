import Navbar from '../components/Navbar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm">{children}</div>
      </main>
    </>
  );
}
