import React from 'react'

export const Buscador = ({ data, setData }) => {
    const handleSubmitSearch = (e)=> {
        e.preventDefault();
        const filterNombre =  data.filter(item => (item.nombre).startsWith(search.value))
        const filterCorreo =  data.filter(item => (item.correo).startsWith(search.value))
        const filterEdad =  data.filter(item => (item.edad).startsWith(search.value))
        const filterCargo =  data.filter(item => (item.cargo).startsWith(search.value))
        const filterTelefono =  data.filter(item => (item.telefono).startsWith(search.value))
        if (filterNombre.length > 0){
            setData([
                ...filterNombre
            ])
        }
        if (filterCorreo.length > 0){
            setData([
                ...filterNombre
            ])
        }
        if (filterEdad.length > 0){
            setData([
                ...filterEdad
            ])
        } 
        if (filterCargo.length > 0){
            setData([
                ...filterCargo
            ])
        } 
        if (filterTelefono.length > 0){
            setData([
                ...filterTelefono
            ])
        } 
    }
    return (
        <form onSubmit={handleSubmitSearch} className="form-inline my-3 d-flex w-50 align-self-start">
            <input 
                id='search'
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