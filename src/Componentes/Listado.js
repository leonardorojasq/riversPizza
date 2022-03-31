import React, { useState } from 'react';
import About from './About'

const initialDb = [
  {
    nombre: "Juan Perez",
    telefono: 314425874,
    precio: 25.000,
    pizza: "Hawaiana",
    fecha: "25/03/2022",
    id: 1
  },
  {
    nombre: "Ana Maria Ososrio",
    telefono: 3112547845,
    precio: 38500,
    pizza: "Peperoni",
    fecha: "25/03/2022",
    id: 2
  },
  {
    nombre: "Mariah Carey",
    telefono: 3104587845,
    precio: 24000,
    pizza: "De la casa",
    fecha: "25/03/2022",
    id: 3
  },
]


const Listado = ({data}) => {
const [db, setDb] = useState(initialDb)
const createData = (data) => {
  data.id = Date.now();
  //console.log(data)
 setDb([...db, data]);
};
const deleteData = (id)=>{}
  return (
    <div className="container">
    
    <table className='table'>
    <thead>
            <th>
              <td className="td">Nombre del cliente</td>
              <td className="td">Teléfono</td>
              <td className="td">Precio</td>
              <td className="td">Pizza</td>
              <td className="td">Fecha</td>
              <td className="td">Acción</td>
            </th>
          </thead>
          <tbody>
            <tr>
              
            <About 
            data={db}
            //setDataToEdit={setDataToEdit}
            createData={createData}
            deleteData={deleteData}
            />
            
            </tr>
          </tbody>
    </table>
    
    </div>
  )
}
export default Listado