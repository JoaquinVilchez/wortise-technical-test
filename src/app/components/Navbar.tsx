'use client';

import { authClient } from '@/lib/authClient';
import { useClickOutside } from '@/src/hooks/useClickOutside';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [openOptions, setOpenOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const optionsRef = useClickOutside(() => setOpenOptions(false));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    authClient.getSession().then((response) => {
      if ('data' in response && response.data?.user) {
        setName(response.data.user.name);
        setEmail(response.data.user.email);
      } else {
        router.push('/login');
      }
    });
  }, [router]);

  const onSubmit = async () => {
    setLoading(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setOpenOptions(false);
          router.push('/login');
        },
      },
    });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              className="block text-gray-600 text-xl font-semibold"
              href="/"
            >
              Wortise Technical Test
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/articles"
                  >
                    Artículos
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden md:relative md:block">
              <button
                type="button"
                onClick={() => setOpenOptions((prev) => !prev)}
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner cursor-pointer"
              >
                <Image
                  src="/avatar.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="size-10 object-cover"
                />
              </button>

              {openOptions && (
                <div
                  ref={optionsRef}
                  className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <div className="py-4 px-6">
                    <p className="text-sm font-normal">{name}</p>
                    <p className="text-xs text-gray-500">{email}</p>
                  </div>

                  <div className="p-2">
                    <button
                      onClick={onSubmit}
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 cursor-pointer"
                      role="menuitem"
                      disabled={loading}
                    >
                      {loading ? 'Saliendo...' : 'Cerrar sesión'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
