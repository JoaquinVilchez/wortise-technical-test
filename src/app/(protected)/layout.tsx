import Navbar from '../components/Navbar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen container max-w-screen-xl mx-auto">
        <div className="w-full">{children}</div>
      </main>
    </>
  );
}
