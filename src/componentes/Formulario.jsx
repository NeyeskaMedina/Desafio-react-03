import React, { useState } from 'react'
import Swal from 'sweetalert2'
import  { v4 }  from 'uuid';

export const Formulario = ({ data, setData, setMsgAlert, setColor }) => {
  const [err, setErr] = useState(false)
  const [inputs, setInputs] = useState({nombre: "", correo: "", edad: "", cargo: "", telefono: ""})
  const handleChange = (e) =>{
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      })
  }
  const handleSubmit = (e)=>{
      e.preventDefault()
      //buscamos en la data por items comparamos con los datos ingresados y si existe lo guardamos en una variable
      const existeColaborador = data.find(item => item.correo === inputs.correo.trim());
          if (existeColaborador){
            Swal.fire({
              title: 'Error!',
              text:  'Error! El colaborador ya se encuentra registrado',
              icon:  'error',
            })
                setErr(true);
                setMsgAlert("Error! El colaborador ya se encuentra registrado");
                setColor("alert alert-danger");
            return;
          }
      
      if (inputs.nombre.trim() === "" || inputs.correo.trim() === "" || inputs.edad.trim() === "" || inputs.cargo.trim() === "" || inputs.telefono.trim() === "") {
          console.error('Ninguno de los campos puede estar vacio');
          Swal.fire({
          title: 'Error!',
          text:  'Error! Ninguno de los campos puede estar vacio',
          icon:  'error',
        })
            setErr(true);
            setMsgAlert("Error! Todos los campos son obligatorios");
            setColor("alert alert-danger");
        return;
      }
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  
      
      if (!emailRegex.test(inputs.correo)) {
            setErr(true);
            Swal.fire({
              title: 'Error!',
              text:  'Error! introduzca un email valido',
              icon:  'error',
            })
            setMsgAlert("Error! introduzca un email valido");
            setColor("alert alert-danger");
            return;
      }
      setData([
        ...data,
            {
              id: v4(),
              nombre: inputs.nombre,
              correo: inputs.correo,
              edad: inputs.edad,
              cargo: inputs.cargo,
              telefono: inputs.telefono
            }
          ])
          Swal.fire({
            title: 'Excelente!',
            text:  'Excelente!, Su registro ha sido exitoso',
            icon:  'success',
          })
          console.log(data)
        setErr(false);
        setMsgAlert("Excelente! Su registro ha sido exitoso");
        setColor("alert alert-success");
        setInputs({nombre: "", correo: "", edad: "", cargo: "", telefono: ""});

  }
  
  return (
    <>
    <form onSubmit={handleSubmit} className='' autoComplete='off'>
      <h1>Agregar Colaborador</h1>
      <div className='form-group mb-4 w-75'>
          <input 
              id='inputNombre'
              name='nombre'
              type="text"
              placeholder='Nombre Completo'
              value={inputs.nombre}
              onChange={handleChange}
              
          />
      </div>
      <div className='form-group w-75'>
            <input 
                id='inputEmail'
                name='correo'
                type="text"
                placeholder='tuemail@ejepmlo.com'
                onChange={handleChange}
                value={inputs.correo}
            />
      </div>
      <div className='form-group w-75'>
                <input 
                    id='inputEdad'
                    name='edad'
                    type="text"
                    placeholder='Edad'
                    onChange={handleChange}
                    value={inputs.edad}
                />
      </div>
      <div className='form-group w-75'>
                <input 
                    id='inputCargo'
                    name='cargo'
                    type="text"
                    placeholder='Cargo'
                    onChange={handleChange}
                    value={inputs.cargo}
                />
      </div>
      <div className='form-group w-75'>
                <input 
                    id='inputTelefono'
                    name='telefono'
                    type="text"
                    placeholder='+569xxxxxxxx'
                    onChange={handleChange}
                    value={inputs.telefono}
                />
      </div>
      <button  className='"btn btn-primary w-75' type="submit">
          Agregar
      </button>
  </form>
  </>
  )
}
export default Formulario;