// importando lo que se necesita de React
import React, {useState} from 'react'
import Input from './components/Input';
 
// componente funcional App
function App() {
  /************************************************************************
   * Req 2:                                                               *
   *        El componente principal App.jsx almacenará los estados de los *
   *        inputs a través de useState.                                  *
   *                                                                      *
   * **********************************************************************/
  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  
  return (
    <div>
      <h1 style={{textAlign: 'center', paddingBottom: '40px'}}>Ingreso de datos</h1>
        {/* llamada al componente Input y envío de props*/}
        <Input
            name={nombre}
            setName={setNombre}
            password={password}
            setPassword={setPassword} 
            error={error}
            setError={setError} 
        />
    </div>
  );
}

export default App;
