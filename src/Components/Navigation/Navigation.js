import { Link } from "react-router-dom";
import "./Navigation.css"
export const Navigation = ({paths, nav}) => <ul className="nav">{paths.map((path,i)=> <Link to={path.to} className={nav===window.location ? 'navActive' : ''}>{path.str}</Link>)}</ul>