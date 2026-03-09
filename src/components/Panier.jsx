import { useState } from "react";

export function Panier({ panier, isOpen, setIsOpen }) {
  return isOpen ? (
    <div className="bg-blue-400 p-2 ">
      <p>Nombre d'article dans le panier : {panier.length}</p>
      <ul>
        {panier.map((i, index) => (
          <li key={index}>{i.modele}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-2">
        <button
          className="btn btn-neutral"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Fermer le panier
        </button>
      </div>
    </div>
  ) : undefined;
}
