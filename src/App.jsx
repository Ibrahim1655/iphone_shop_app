import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Iphones } from "./components/Iphones";
import { Panier } from "./components/Panier";
import { iphoneData } from "./datas/listeIphones";
function App() {
  const [panier, updatePanier] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="m-5">
      <Header panier={panier} isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className="flex">
        <div className="flex-3/4">
          <Iphones
            iphone={iphoneData}
            updatePanier={updatePanier}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            panier={panier}
          />
        </div>
        <div className="">
          <Panier
            panier={panier}
            updatePanier={updatePanier}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            iphone={iphoneData}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
