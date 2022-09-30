

import Home from '../pages/Home'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'

import ProjectById from '../pages/ProjectById'
import ContatoPage from '../pages/ContatoPage';
import {BrowserRouter as Router, Link, Route, Routes, useLocation} from "react-router-dom"

import {AnimatePresence} from "framer-motion"

function AnimatedRoutes(){

    const location = useLocation()

    return(
        <div>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/project/:id" element={<ProjectById/>}/>
                    <Route path="/jorney" element={<Experience/>}/>
                    <Route path='/getInTouch' element={<ContatoPage/>}></Route>
                </Routes>
            </AnimatePresence>
        

        </div>
    )

}

export default AnimatedRoutes