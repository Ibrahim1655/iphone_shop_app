import { Button } from "./Button";
import type { Iphone, PanierItem } from "../types";

interface IphonesProps {
  iphone: Iphone[];
  updatePanier: React.Dispatch<React.SetStateAction<PanierItem[]>>;
  panier: PanierItem[];
  setFlashMessage: (message: string | null) => void;
}

const cardStyle =
  "card bg-base-100 w-80 shadow-md pt-1 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";

export function Iphones({
  iphone,
  updatePanier,
  panier,
  setFlashMessage,
}: IphonesProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 gap-6">
      {iphone.map((item) => (
        <div key={item.id} className={cardStyle}>
          <figure>
            <div className="bg-slate-100">
              <img src={item.image} alt={item.modele} className="w-48 h-48" />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.modele}</h2>
            <p>{item.description}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-2xl font-bold text-primary">{item.prix}</p>
            </div>
            <div className="card-actions justify-end">
              <Button
                modele={item.modele}
                prix={item.prix}
                updatePanier={updatePanier}
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
