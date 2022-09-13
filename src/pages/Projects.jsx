import ProjectItem from '../components/ProjectsItem'
import { ProjectList } from '../helpers/ProjectList'
import projects from '../styles/projecs.css'

import Contador from '../assets/contador.jfif'
import TodoReact from '../assets/example-three.jpeg'
import GalhoSeco from '../assets/galho-seco.jpeg'
import TodoVanilla from '../assets/todolist.jfif'

function Projects(){
    return(
        <section>
            <h3>Projects: </h3>
            <div className="projectHomeList">
                <a target="blank" href='https://todo-g.netlify.app'><img src={TodoVanilla}/></a>
                <a target="blank" href='https://rtodo-rlist.netlify.app/'><img src={TodoReact}/></a>
                <a target="blank" href='https://galhoseco.netlify.app'><img src={GalhoSeco}/></a>
                <a target="blank" href='https://g-contador.netlify.app'><img src={Contador}/></a>
            </div>
        </section>
    )
}

export default Projects