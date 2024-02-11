import { Link } from "react-router-dom";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid">
      <nav className="w-full bg-black text-white px-10 py-4">
        <ul className="flex flex-row gap-10">
          <li className="list-item flex-none">
            <Link to="/">P</Link>
          </li>
          <li className="list-item flex-none">
            <Link to="/bills">Contas</Link>
          </li>
          <li className="list-item flex-none">
            <Link to="/bills/create">Criar Conta</Link>
          </li>
        </ul>
      </nav>
      <div className="flex mx-40 mt-5 bg-white rounded-sm p-8 shadow-lg min-h-[800px]">
        {children}
      </div>
    </div>
  );
}
