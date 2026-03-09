import { Button } from "./Button";

const cardStyle =
  "card bg-base-100 w-80 shadow-md pt-1 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";

export function Iphones({
  iphone,
  updatePanier,
  isOpen,
  setIsOpen,
  panier,
  setFlashMessage,
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 gap-6">
      {iphone.map((iphone) => (
        <div className={cardStyle}>
          <figure>
            <div className="bg-slate-100">
              <img src={iphone.image} alt="Shoes" className="w-48 h-48" />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{iphone.modele}</h2>
            <p>{iphone.description}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-2xl font-bold text-primary">{iphone.prix}</p>
            </div>
            <div className="card-actions justify-end">
              <Button
                modele={iphone.modele}
                prix={iphone.prix}
                updatePanier={updatePanier}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                panier={panier}
                setFlashMessage={setFlashMessage}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
