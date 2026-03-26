import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Iphones } from "./components/Iphones";
import { Panier } from "./components/Panier";
import { iphoneData } from "./datas/listeIphones";
import type { PanierItem } from "./types";

function App() {
  const [panier, updatePanier] = useState<PanierItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [flashMessage, setFlashmessage] = useState<string | null>(null);
  const [recherche, setRecherche] = useState("");

  const iphoneFiltre = iphoneData.filter((iphone) =>
    iphone.modele.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <main className="bg-base-200 p-7">
      <section className="m-3">
        <Header
          panier={panier}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          recherche={recherche}
          setRecherche={setRecherche}
        />
        <section className="flex p-5">
          <div className="flex-3/4">
            <Iphones
              iphone={iphoneFiltre}
              updatePanier={updatePanier}
              panier={panier}
              setFlashMessage={setFlashmessage}
            />
          </div>
          <div className="">
            <Panier
              panier={panier}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </section>
        {flashMessage ? (
          <div className="toast toast-top toast-end">
            <div className="alert alert-success">
              <span>{flashMessage}.</span>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default App;
