import React from 'react';
import Table from 'react-bootstrap/Table';

export const Listado = ({ data }) => {
    
    return (
        <>
            <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nombre Completo</th>
                            <th>Correo</th>
                            <th>Edad</th>
                            <th>Cargo</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                {data.map(item => (
                    <tbody>
                        <tr>
                            <th>{item.nombre}</th>
                            <th>{item.correo}</th>
                            <th>{item.edad}</th>
                            <th>{item.cargo}</th>
                            <th>{item.telefono}</th>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </>
    );
}

export default Listado;