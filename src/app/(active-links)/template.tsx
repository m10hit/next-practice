'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: 'Login', href: '/login-active' },
  { name: 'Register', href: '/register-active' },
  { name: 'Forgot Password', href: '/forgot-password-active' },
];

export default function AuthLayoutActive({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState('');
  return (
    <div>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} />
      </div>
      {navLinks.map(link => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
