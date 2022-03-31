import { Route, Link } from "react-router-dom";
import Home  from "./Home";
import Crearpizza  from "./Crearpizza";
import Listado from "./Listado";
import "./Styles.css";

const Nav = () => {
  return (
    <div  className="head">
       <hedaer>
      <Route path="/">
      <nav className="nav-bar">
      <Link className="nav-link" to="/home">Home</Link>
      <Link className="nav-link" to="/orden">Crear Pizza</Link>
      <Link className="nav-link" to="/listado">Listado</Link>
      </nav>
      </Route>
      </hedaer>

      <div className="main">
     <Route path="/home" exact="true">
      <Home />
    </Route>
    <Route path="/orden" exact="true">
      <Crearpizza />
    </Route>
    <Route path="/listado" exact="true">
      <Listado />
    </Route>
    
    </div>       
    </div>
  )
}
export default Nav