/*************************************************************
 * Req 1:                                                    * 
 *    a.- Implementación de componente funcional Input       *
 *    b.- Implementa 2 etiquetas input para ingreso de datos *
 *    c.- Recibe props de valor de estados y modificadoras   *
 *                                                           *
 *************************************************************/

// importando lo que se necesita de React
import React from 'react'

const Input = ({ name, setName, password, setPassword, error, setError}) => {
  // funcion de validar el input recibe un evento (e)
  const validarInput = (e) => {
    //Prevenimos el comportamiento por defecto del formulario
    e.preventDefault()
    //Validación input de nombre para que no acepte vacio
    if (name === '') {
      setError(true)  //fijar el estado de error en true
      return  // se aborta el componente funcional
    }
    //Fija el estado de error en false
    setPassword("")
    setName("")
    setError(false)
  }
    // return del render del componente funcional todo en JSX
    return (
      /* inicio del formulario con llamada a una funcion si se ejecuta el formulario */
      <form onSubmit={validarInput}>

         {/* si error es true debe pedir ingresar el nombre */}
        {error ? <p className="error" style = {{color: 'red'}}>Debe ingresar el nombre sin numeros</p> : null}

        <div className="form-group">
            {/*  cada vez que cambia el input se actualiza el valor de su contenido */}
            <label>Nombre</label>
            <input 
                className="form-control" 
                type='text'
                name="Nombre" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                style = {{marginBottom: '20px'}}
            /> 
            <label>Password</label>
            <input 
                className="form-control" 
                type="number"
                name="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style = {{marginBottom: '20px'}}
            /> 
            <br></br>
            {/******************************************************************************** 
              * Req 3:                                                                       *
              * El componente Boton debe mostrarse únicamente si el valor del input password *
              * es igual a “252525”                                                          *
              ********************************************************************************/}
            {password ==='252525' 
              ? <div className="d-grid gap-2 col-6 mx-auto"><button className="btn btn-dark mt-3" type="submit"> Enviar</button></div>
              : <div className="d-grid gap-2 col-6 mx-auto"><button className="btn btn-dark mt-3" type="submit" disabled> Enviar</button></div>
            }
        </div>
      </form>
    )
}

export default Input