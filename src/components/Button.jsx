export function Button({
  modele,
  updatePanier,
  panier,
  prix,
  setFlashMessage,
}) {
  const addPanier = (modele, prix) => {
    updatePanier([...panier, { modele, prix, quantite: 1 }]);
    console.log(panier);
    setFlashMessage(`L'${modele} a été ajouté au panier`);
    {
      /*Feedback de l'ajout au panier pendant 3 secondes*/
    }
    setTimeout(() => {
      setFlashMessage(null);
    }, 3000);
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
