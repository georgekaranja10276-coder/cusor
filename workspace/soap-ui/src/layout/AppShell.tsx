import { Sidebar } from './Sidebar';

export function AppShell({ children }: { children: React.ReactNode }){
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}