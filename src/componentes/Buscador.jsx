import React, { useState } from "react";

const Buscador = ({ data, setData, originalData }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);

    if (valorBusqueda === "") {
      // Si el valor de búsqueda está vacío, restaura los datos a los originales
      setData(originalData);
    } else {
      // Realiza el filtrado de datos basado en el valor de búsqueda
      const datosFiltrados = originalData.filter((colaborador) =>
        Object.values(colaborador)
          .join(" ")
          .toLowerCase()
          .includes(valorBusqueda.toLowerCase())
      );

      setData(datosFiltrados);
    }
  };

  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar por nombre, correo, edad, cargo o teléfono"
        value={busqueda}
        onChange={handleBusqueda}
      />
    </div>
  );



export default Buscador;
