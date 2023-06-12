import React from "react";
import PrecisionRoll from "./PrecisionRoll";
import { Pie, Cell, PieChart, Label } from "recharts";
import "./Popup.css";

export default function Popup({ data }) {  //definition du composant fonctionnel Popup 
  const { shop_name, shop_address, company_name, shop_manager_surname, shop_manager_name, shop_picture, total_shop_score } = data;
  //destructurer les propriétés de l'objet data pour les utiliser plus facilement dans le code 

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="shop-info">
          <div className="image-score-wrapper">
            <img src={shop_picture} alt="Shop" className="shop-picture" />
            <div className="total-score">
              <PrecisionRoll R={total_shop_score / 100} />
              <p>Total Score</p>
            </div>
          </div>
          <div className="shop-details">
            <h2>{shop_name}</h2>
            <p>{shop_address}</p>
            <p>Company: {company_name}</p>
            <p>Manager: {shop_manager_name} {shop_manager_surname}</p>
          </div>
        </div>
        <div className="individual-scores">
          <div className="score-column">
            {data.data.map((item, index) => {
              if (index % 4 === 0 || index % 4 === 1) {
                return (
                  <div className="score-item" key={index}>
                    <PrecisionRoll R={item.R} />
                    <p>Mean Shop: {item.mean_shop}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="score-column">
            {data.data.map((item, index) => {
              if (index % 4 === 2 || index % 4 === 3) {
                return (
                  <div className="score-item" key={index}>
                    <PrecisionRoll R={item.R} />
                    <p>Mean Shop: {item.mean_shop}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
