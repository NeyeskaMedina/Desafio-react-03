import { DataColaboradores } from './componentes/dataColaboradores';
import { useState } from 'react';
import Alert from './componentes/Alert';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import Buscador from './componentes/Buscador';


export const App = () => {
      const [data, setData] = useState(DataColaboradores);
      const[msgAlert, setMsgAlert] = useState('')
      const[color, setColor] = useState("")

      return (
            <>
                  <Alert 
                        msgAlert ={msgAlert} 
                        color = {color}
                  />
                  <Formulario 
                        data ={data} 
                        setData={setData} 
                        setMsgAlert={setMsgAlert}
                        setColor = {setColor}
                  />
                  <Buscador data={data} />
                  <Listado 
                        data ={data}
                  />
            </>
      )
}
export default App;


