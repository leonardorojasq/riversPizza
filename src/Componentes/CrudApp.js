import CrudForm from './CrudForm';
import React, { useState } from 'react';
const CrudApp = () => {
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
     
    };
    const updateData = (data) => {};
    
  return (
    <div>
        <h2>Crud App</h2>
        <CrudForm 
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        </div>
  )
}

export default CrudApp