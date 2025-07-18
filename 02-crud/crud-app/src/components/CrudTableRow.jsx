import React from "react";

const CrudTableRow = ({ data, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = data;

  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(data)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
