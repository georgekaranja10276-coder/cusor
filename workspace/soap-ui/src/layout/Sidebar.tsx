import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Plus, History, Settings, LogOut } from 'lucide-react';

export function Sidebar(){
  const linkBase = 'flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-300 hover:bg-neutral-900/60';
  const active = 'bg-neutral-900/60 text-white';
  return (
    <aside className="hidden md:flex w-64 flex-col gap-2 p-4 border-r border-neutral-800 bg-surface min-h-screen">
      <div className="flex items-center gap-3 mb-4 px-2">
        <div className="h-9 w-9 rounded-full bg-green-700 grid place-items-center font-bold">S</div>
        <div>
          <div className="font-semibold">SOAP</div>
          <div className="text-xs text-neutral-400">User Access Management</div>
        </div>
      </div>
      <NavLink to="/" end className={({isActive})=>`${linkBase} ${isActive?active:''}`}>
        <LayoutDashboard size={18}/><span>Dashboard</span>
      </NavLink>
      <NavLink to="/request" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>
        <Plus size={18}/><span>New Request</span>
      </NavLink>
      <NavLink to="/history" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>
        <History size={18}/><span>Request History</span>
      </NavLink>
      <NavLink to="/profile" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>
        <Settings size={18}/><span>Profile & Settings</span>
      </NavLink>
      <div className="mt-auto" />
      <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-transparent hover:bg-neutral-900/60 text-red-400"><LogOut size={18}/> Logout</button>
    </aside>
  );
}