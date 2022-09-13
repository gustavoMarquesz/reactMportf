import {useNavigate} from "react-router-dom"

function ProjectItem({name, image, id}){
    const navigate = useNavigate()

    return(
        <section className="projectItem" onClick={()=> {navigate("/project/" + id)}}>
            <div className="bgImage" style={{ backgroundImage: `url(${image})` }}/>
            <h4>{name}</h4>
        </section>
    )
}

export default ProjectItem