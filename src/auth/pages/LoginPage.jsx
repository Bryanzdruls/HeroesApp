import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import BrianRepo from "./BrianRepo";

export const LoginPage = () => {
  const {login} = useContext( AuthContext );
  const navigate =useNavigate()

  const onLogin= ()=>{
    const lastPath = localStorage.getItem('lastPath')|| '/';

    login('Brian Torres');  
    navigate( lastPath ,{
      replace:true,
    });
  }

  return (
    <div className="container mt-5 text-center">
      <h1>Simulation of a Login Page</h1>
      <hr />
      <div>
        <p>Notese que la ruta de esta aplicacion en el url es "login", presione ingresar para desplazarse a la ruta "marvel".</p>
      </div>
      <button 
        className="btn btn-primary"
        onClick={onLogin}
      >
        Ingresar
      </button>
    </div>
  )
}
