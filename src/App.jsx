import { useState } from "react";

import { DataColaboradores } from "./DataColaboradores";

import Alert from "./componentes/Alert";
import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";
import Buscador from "./componentes/Buscador";

import "./app.css";

export const App = () => {
  const [data, setData] = useState(DataColaboradores);
  const [msgAlert, setMsgAlert] = useState("");
  const [color, setColor] = useState("");
  const [originalData, setOriginalData] = useState(DataColaboradores)
 
  return (
    <main>
      <section className="form-data">
        <Alert msgAlert={ msgAlert } color={ color } />
        <Formulario
        data={data}
        setData={setData}
        setMsgAlert={setMsgAlert}
        setColor={setColor}
        originalData={ originalData}
        setOriginalData={setOriginalData}
        />
      </section>
      <section className="list-data">
        <Buscador data={data} setData={setData} originalData={originalData} />
        <Listado data={data} originalData={originalData} />
      </section>
    </main>
  );
};
export default App;



