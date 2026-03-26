import reactLogo from "../assets/react.svg";
import { ShoppingBag } from "lucide-react";
import type { PanierItem } from "../types";

interface HeaderProps {
  panier: PanierItem[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  recherche: string;
  setRecherche: (value: string) => void;
}

export function Header({
  panier,
  isOpen,
  setIsOpen,
  recherche,
  setRecherche,
}: HeaderProps) {
  return (
    <header className="p-5 flex items-center justify-between bg-blue-200 rounded-2xl gap-3 shadow-lg sticky top-0 z-50">
      {/* Partie gauche : Titre et Logo */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">
          Boutique d'iPhone en <span className="text-blue-400">React JS</span>
        </h1>
        <img src={reactLogo} alt="React Logo" className="w-8 h-8" />
      </div>

      {/* Milieu : Barre de recherche */}
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
          <input
            type="search"
            className="grow w-full max-w-lg"
            required
            placeholder="Search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </label>
      </div>

      {/* Partie droite : Panier */}
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">
          {panier.length}
        </span>
        <ShoppingBag
          className="cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </header>
  );
}
