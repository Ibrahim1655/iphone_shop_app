import reactLogo from "../assets/react.svg";
import { ShoppingBag } from "lucide-react";

export function Header({ panier, isOpen, setIsOpen }) {
  return (
    <header className="p-5 m-5 flex items-center justify-between bg-blue-200 rounded-2xl gap-3">
      {/* SECTION GAUCHE : Titre et Logo */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">
          Boutique d'iPhone en <span className="text-blue-400">React JS</span>
        </h1>
        <img src={reactLogo} alt="React Logo" className="w-8 h-8" />
      </div>

      {/* SECTION CENTRE : Barre de recherche */}
      <div className="flex-1 max-w-md mx-4">
        <label className="input flex items-center gap-2 bg-white p-2 rounded-lg">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" required placeholder="Search" />
        </label>
      </div>

      {/* SECTION DROITE : Panier */}
      <div className="flex items-center">
        <ShoppingBag
          className="cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </header>
  );
}
