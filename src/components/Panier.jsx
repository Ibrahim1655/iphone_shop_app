export function Panier({ panier, isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 sticky top-5">
      <div className="card-body">
        <h2 className="card-title text-2xl border-b pb-2">Votre Panier 🛒</h2>

        <p className="text-sm text-gray-500 mb-4">
          {panier.length === 0
            ? "Votre panier est vide pour le moment."
            : `${panier.length} article(s) dans le panier.`}
        </p>

        <ul className="flex flex-col gap-3 mb-4">
          {panier.map((article, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-base-200 p-3 rounded-lg shadow-sm"
            >
              <span className="font-semibold">{article.modele}</span>
              <span className="badge badge-primary font-bold">
                {article.prix} €
              </span>
            </li>
          ))}
        </ul>

        <div className="card-actions mt-4">
          <button
            className="btn btn-outline btn-error w-full"
            onClick={() => setIsOpen(false)}
          >
            Fermer le panier
          </button>
        </div>
      </div>
    </div>
  );
}
