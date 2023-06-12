import React, { useState } from "react";
import Popup from "./Popup";
import "./App.css";

const data = {   // definition de notre structure dans le App (fichier principal de mon application )
  shop_name: "Macdonald Paris V",
  shop_adress: "17 rue de l'espoir, 75005, Paris",
  company_name: "Macdonalds",
  shop_manager_surname: "Paul",
  shop_manager_name: "Barbotin",
  shop_id: "AZE",
  shop_picture:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV",
  total_shop_score: 65,
  data: [
    { mean_shop: 10000, R: 0.5 },
    { R: 0.6 },
    { mean_shop: 20000, R: 0.9 },
    { R: 0.2 },
  ],
};

export default function App() {
  const [isOpen, setIsOpen] = useState(true);  //useState initialise isopen avec la valeur true 
//setIsOpen pour la mise à jour de isOpen (inverse la valeur booleenne)
  const togglePopup = () => { //la fonction togglePopup utilise setIsoPEN POUR GERER l'ouverture et femeture de la popup.
    setIsOpen(!isOpen);  
  };

  return ( //le retour de du composant App contenant un bouton et declenche la fonction togglePopup
    <div className="app">  
      <h1>Display Data Popup</h1>
      <button onClick={togglePopup}>Open Popup</button>
      {isOpen && <Popup data={data} onClose={togglePopup} />}
    </div>
  );
}