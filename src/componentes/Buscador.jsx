import React from 'react'

// import Listado from './Listado';

export const Buscador = ({ data }) => {
  
  const handleSubmitSearch = (e)=> {
      e.preventDefault();
      console.log(e);
      // const filterNombre = data.filter(inpBuscar.value === data.nombre)
        
      }

  return (
      <form onSubmit={handleSubmitSearch} className="form-inline my-3 d-flex w-50 align-self-start">
          <input 
              className="form-control mr-sm-2 w-50" 
              type="search" 
              placeholder="Buscar Colaborador" 
              aria-label="Search"
              name='inpBuscar'
          />
          <button 
              className="btn btn-outline-primary my-2 my-sm-0 btnSearch" 
              type="submit">
                Buscar
          </button>
      </form>
  )
};
export default Buscador;