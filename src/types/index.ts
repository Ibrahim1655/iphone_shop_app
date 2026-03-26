export interface Iphone {
  id: number;
  modele: string;
  image: string;
  description: string;
  prix: number;
  etat: string;
}

export interface PanierItem {
  modele: string;
  prix: number;
  quantite: number;
}
