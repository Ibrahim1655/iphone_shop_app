import { Button } from "./Button";

export function Iphones({ iphone, updatePanier, isOpen, setIsOpen, panier }) {
  return (
    <section className="grid grid-cols-4 pl-5 gap-y-4">
      {iphone.map((iphone) => (
        <div className="card bg-base-100 w-80 shadow-md" key={iphone.modele}>
          <figure>
            <img src={iphone.image} alt="Shoes" className="w-48 h-48" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{iphone.modele}</h2>
            <p>{iphone.description}</p>
            <div className="card-actions justify-end">
              <Button
                modele={iphone.modele}
                prix={iphone.prix}
                updatePanier={updatePanier}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                panier={panier}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
