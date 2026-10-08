'use client';

import ActivityWorkPanel from '@/components/activity-work-panel';
import { Suspense, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/auth/session').then(async (response) => {
      if (!response.ok) { router.replace('/login'); return; }
      const user = await response.json();
      if (cancelled) return;
      localStorage.setItem('talentlab_current_user', JSON.stringify(user));
      if (user.role !== 'professor' && (pathname === '/avaliacao' || pathname.startsWith('/cadastros/turmas'))) {
        router.replace('/dashboard'); return;
      }
      setReady(true);
    }).catch(() => router.replace('/login'));
    return () => { cancelled = true; };
  }, [router, pathname]);

  if (!ready) return <div className="min-h-screen bg-[#f5f5f5]" />;

  return (
    <div className="tl-shell flex h-dvh flex-col lg:flex-row">
      <Sidebar />
      <div className="min-h-0 min-w-0 flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="tl-main min-h-0 flex-1 overflow-y-auto"><Suspense fallback={null}><ActivityWorkPanel /></Suspense><div className="mx-auto w-full max-w-[1500px]">{children}</div></main>
      </div>
    </div>
  );
}
