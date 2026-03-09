export function Button({ modele, updatePanier, panier, prix }) {
  const addPanier = (modele, prix) => {
    updatePanier([...panier, { modele, prix, quantite: 1 }]);
    console.log(panier);
  };
  return (
    <button
      className="btn btn-primary "
      onClick={() => addPanier(modele, prix)}
    >
      Acheter
    </button>
  );
}
