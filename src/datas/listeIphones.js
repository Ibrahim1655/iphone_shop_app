import img16Vert from "../assets/iphone16vert.jpg";
import img17Violet from "../assets/iphone17_violet.jpg";
import img17ProGris from "../assets/iphone17pro_gris.jpg";
import img17ProOrange from "../assets/iphone17pro_orange.jpeg";
import img17ProMax from "../assets/iphone17promax_bleu.jpg";

const iphoneData = [
  {
    id: 1,
    modele: "iPhone 16 Vert",
    image: img16Vert,
    description:
      "Le dernier standard d'Apple avec un système de caméra avancé et une autonomie longue durée.",
    prix: 969,
    etat: "Neuf",
  },
  {
    id: 2,
    modele: "iPhone 17 Violet",
    image: img17Violet, // Adapté selon ton fichier iphone17_violet....
    description:
      "L'élégance du violet combinée à la puissance de la nouvelle puce A19.",
    prix: 1059,
    etat: "Neuf",
  },
  {
    id: 3,
    modele: "iPhone 17 Pro Gris Titane",
    image: img17ProGris, // Adapté selon ton fichier iphone17pro_gri...
    description:
      "Conçu en titane de qualité aérospatiale avec le nouveau bouton Action ultra-réactif.",
    prix: 1229,
    etat: "Neuf",
  },
  {
    id: 4,
    modele: "iPhone 17 Pro Orange",
    image: img17ProOrange, // Adapté selon ton fichier iphone17pro_or...
    description:
      "La finition Or prestigieuse pour le modèle Pro le plus puissant jamais créé.",
    prix: 1229,
    etat: "Neuf",
  },
  {
    id: 5,
    modele: "iPhone 17 Pro Max",
    image: img17ProMax, // Adapté selon ton fichier iphone17promax...
    description:
      "L'expérience ultime sur grand écran avec un zoom optique inégalé.",
    prix: 1479,
    etat: "Neuf",
  },
];

export default iphoneData;
