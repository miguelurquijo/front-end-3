
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react"

export default function Item(props) {
  // Here I declaring the initial state of the items
  const [initial, upDated]=useState(props.stock);
  // Here I decrease the stock of each item
  const bought = ()=> {
    upDated(initial -1);
    props.shoppingCartCounter(); 
  };

  return (
    <div className='producto'>
      <h3>{props.name}</h3>
      <p>{props.descripcion}</p>
      {/*Here I show the remining stock*/}
      <h5>En Stock: {initial>0 ? initial : <span>agotado</span>}</h5>
      {/*Enable or disable the button based on stock*/}
      <button disabled={initial<=0} onClick={bought}> {initial>0 ? "COMPRAR" : "SIN STOCK"} </button>
    </div>
  )
}