'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  href?: string;
}

export default function Button({
  children,
  isLoading,
  href,
  ...props
}: ButtonProps) {
  const className = `cursor-pointer bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors ${
    props.className ?? ''
  }`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <>
      <button
        {...props}
        className={className}
        disabled={props.disabled || isLoading}
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          children
        )}
      </button>
    </>
  );
}
