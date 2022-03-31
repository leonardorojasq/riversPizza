import React from "react";

const CrudTableRow  = ({el}) => {
  return (
    <tr>
      <td>{el.nombre}</td>
      <td>{el.telefono}</td>
      <td>{el.precio}</td>
      <td>{el.pizza}</td>
      <td>{el.fecha}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow ;
