import { useState } from "react";
import { List } from "./List";
import CrudForm from "./CrudForm";
import "./Styles.css";

const getFormattedPrice = (price) => `$${price.toFixed(0)}`;

export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(List.length).fill(false)
  );
  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const PrecioTotal = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + List[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(PrecioTotal);
  };

  return (
    <div>
    
    <div className="body">
      <h3 className="titulo-crear">Acompañamiento para elegir</h3>
      <ul className="top-list">
        {List.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="top-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
          
        })}
        <li>
          <div className="top-list-item">
              
            <div className="left-section fondol">Valor Inicial con Masa:</div>
            <div className="right-section fondor">
              { getFormattedPrice(total+10000) }
              
            </div>
          </div>
          <div className="pizza" id="namepizza"></div>
        </li>
      </ul>
      
    </div>
    <CrudForm />
    </div>
   
  );
}
