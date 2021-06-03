import { Link } from "react-router-dom";
import "./Navigation.css"
import logo from "../../assets/logo/logo.png"
export const Navigation = ({paths, nav}) => 

<nav className="nav">
    <Link to="/"><img src={logo} title={"Goto Home Page"}/></Link>
    {paths.map((path,i)=> <Link to={'/'+path.to} className={nav===window.location ? 'navActive' : ''} title={`Goto ${path.name}`}>{path.name}</Link>)}
    <a href="https://baldridgelodge.networkforgood.com/projects/74020-bald-ridge-lodge-annual">Donate</a>
</nav>