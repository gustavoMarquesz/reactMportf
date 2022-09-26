import { Link, useLocation } from "react-router-dom"
import Navbar from "../styles/NavBar.css"

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

import { useState } from "react";
import { useEffect } from "react";



function NavBar(){

    const [expandNavbar, setExpandNavbar] = useState(false)

    const local = useLocation()

    useEffect(()=>{
        setExpandNavbar(false)
    },[local])

    return(
        <section className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => setExpandNavbar((prev)=> !prev)}> <MenuIcon/></button>
            </div>
            <div className="links">
                <Link className="link" to="/"><HomeIcon/></Link>
                <Link className="link" to="/projects">Deploy dos projetos</Link>
                <Link className="link" to="/jorney">Minha história</Link>
                <Link className="link" to="/getInTouch">Mail me</Link>
            </div>
            
        </section>
    )

}

export default NavBar