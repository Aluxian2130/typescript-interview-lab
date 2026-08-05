import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-black p-4">
        <h1 className="text-xl font-bold">TypeScript Interview Lab</h1>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
