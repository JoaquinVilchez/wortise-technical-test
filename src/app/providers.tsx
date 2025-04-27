'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from './get-query-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

// Implementación basada en este video: https://www.youtube.com/watch?v=XcUpTPbY4Wg.
