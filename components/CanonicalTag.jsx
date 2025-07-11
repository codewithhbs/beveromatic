'use client';
import { usePathname } from 'next/navigation';

export default function CanonicalTag({ baseUrl }) {
  const pathname = usePathname();
  const canonicalUrl = `${baseUrl}${pathname === '/' ? '' : pathname}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
