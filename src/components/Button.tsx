import type { PanierItem } from "../types";

interface ButtonProps {
  modele: string;
  prix: number;
  updatePanier: React.Dispatch<React.SetStateAction<PanierItem[]>>;
  panier: PanierItem[];
  setFlashMessage: (message: string | null) => void;
}

export function Button({
  modele,
  updatePanier,
  panier,
  prix,
  setFlashMessage,
}: ButtonProps) {
  const addPanier = (modele: string, prix: number) => {
    updatePanier([...panier, { modele, prix, quantite: 1 }]);
    console.log(panier);
    setFlashMessage(`L'${modele} a été ajouté au panier`);
    setTimeout(() => {
      setFlashMessage(null);
    }, 3000);
  };

  return (
    <button
      className="btn btn-primary"
      onClick={() => addPanier(modele, prix)}
    >
      Acheter
    </button>
  );
}
