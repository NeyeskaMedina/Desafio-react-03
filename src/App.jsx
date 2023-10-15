
import { useState } from 'react';

import { DataColaboradores } from './DataColaboradores';

import Alert from './componentes/Alert';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import Buscador from './componentes/Buscador';

import './app.css'



export const App = () => {
      const [data, setData] = useState(DataColaboradores);
      const[msgAlert, setMsgAlert] = useState('')
      const[color, setColor] = useState("")

      return (
            <main>
                  <section className='form-data'>
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
                  </section>
                  <section className='list-data'>
                  <Buscador 
                        data={data}
                        setData={setData}
                  />
                  <Listado 
                        data ={data}
                  />
                  </section>
            </main>
      )
}
export default App;


