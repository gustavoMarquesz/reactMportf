import {useNavigate} from "react-router-dom"

function ProjectItem({name, image, id, description}){
  

    return(
        <section className="projectItem">
            <div className="bgImage" style={{ backgroundImage: `url(${image})` }}/>
            <h4>{name}</h4>
            <p>{description}</p>
        </section>
    )
}

export default ProjectItem