'use client';
import Icon from '@/components/Icon';
import Nav from '@/components/Nav';
import { useAuth } from '@/contexts/useAuth';

export default function Template({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <span className="animate-spin">
        <Icon name="progress_activity" />
      </span>
    </div>
  ) : (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-16 font-sans">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <Nav />
        {children}
      </div>
    </div>
  );
}
