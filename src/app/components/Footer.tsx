import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full text-center py-4 text-gray-500 bg-gray-100  text-sm border-t border-gray-200 mt-10">
      Desarrollado por{' '}
      <Link
        href="https://www.linkedin.com/in/joaquinvilchez"
        className="hover:underline"
        target="_blank"
      >
        Joaquín Vilchez
      </Link>
    </footer>
  );
}
