import {useParams} from "react-router-dom"
import {ProjectList} from "../helpers/ProjectList"

import Projectid from "../styles/projectById.css"

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FeedbackIcon from '@material-ui/icons/Feedback';

function ProjectById (){

    const {id} = useParams()
    const project = ProjectList[id]

    return(
        <section className="indivudualsProjects">
            <h3>Nome do projeto: {project.name}</h3>
            <img src={project.image}/>
            <p>{project.description}</p>

            <a href="https://github.com/gustavoMarquesz/README.PORTFR" target="blank">Confere ele funcionando na aba de deploy ou clica aqui<LinkIcon/></a>
            <a href="https://github.com/gustavoMarquesz?tab=repositories" target="blank">Confere o código no GitHub <GitHubIcon/></a>
            <p>Gostaria muito que você entrasse em contato para me dar um Feedback, me chama no LinkedIn!<FeedbackIcon/> </p>
        </section>
    )
}
export default ProjectById