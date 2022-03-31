import React, { useState } from "react";

const initialForm = {
  nombre: "",
  telefono: "",
  precio: "",
  pizza: "",
  fecha: "",
  id: "",
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.nombre || !form.telefono || !form.precio || !form.pizza){
      alert("Los campos no puede estar vacios!")
      return
    }
    if(form.id === null){
      createData(form)
    }else{
      updateData(form)
    }
  
    handleReset();
  };
  const handleReset = () => {
    setForm(initialForm);
  setDataToEdit(null);
  };
  

  

  return (
    <div className="row">
      <h2 className="titulo-pedido">Agregar Pedido</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          class="input"
          value={form.nombre}
          placeholder="Nombre"
          onChange={handleChange}
        />
        <input
          type="phone"
          name="telefono"
          class="input"
          value={form.telefono}
          placeholder="Telefono"
          onChange={handleChange}
        />
        <input
          text="number"
          name="precio"
          class="input"
          value={form.precio}
          placeholder="Precio"
          onChange={handleChange}
        />
        <input
          text="text"
          name="pizza"
          class="input"
          value={form.pizza}
          placeholder="Sabor de la pizza"
          onChange={handleChange}
        />
        <input
          type="date"
          name="fecha"
          class="input"
          value={form.fecha}
          placeholder="Fecha"
          onChange={handleChange}
        />
       <input type="submit" class="primary" value="Enviar" onClick={handleSubmit} />
        <input type="reset" class="primary" value="Limpiar" onClick={handleReset} /> 
       
      </form>
    </div>
     
  );
  
    
};

export default CrudForm;
