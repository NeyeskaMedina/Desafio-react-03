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
                    <tbody>
                {data.map(item => (
                    
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.correo}</td>
                            <td>{item.edad}</td>
                            <td>{item.cargo}</td>
                            <td>{item.telefono}</td>
                        </tr>
                    
                ))}
                </tbody>
            </Table>
        </>
    );
}

export default Listado;