'use client';

import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  actions?: ReactNode;
}

export default function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center mt-10 mb-10">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      {actions && <div>{actions}</div>}
    </div>
  );
}
