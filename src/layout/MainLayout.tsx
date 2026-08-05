import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <header className="border-b border-slate-800 bg-slate-950/90 px-6 py-4 backdrop-blur">
            <h1 className="text-xl font-bold">TypeScript Interview Lab</h1>
          </header>

          <main className="p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
