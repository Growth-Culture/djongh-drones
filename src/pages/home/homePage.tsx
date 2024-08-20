import { Link } from "react-router-dom"

export function HomePage(){
  return (
    <>
      <div className="home"> Home Page</div>
      
      <button><Link to="/sobre-nos">Sobre nós</Link> </button> 
    </>
  )
  
}
