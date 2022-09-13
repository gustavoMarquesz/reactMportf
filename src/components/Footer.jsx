import rodaPe from '../styles/rodaPe.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';



function Footer(){
    return(
        <section className="footer">
            <div>
                <a target="blank" href='https://github.com/gustavoMarquesz'><GitHubIcon/></a>
                <a target="blank" href='https://www.linkedin.com/in/gustavo-marques-818048205/'><LinkedInIcon/></a>
                <a target="blank" href='https://www.instagram.com/gustavo.marquesz/'><InstagramIcon/></a>
            </div>
            <p>&copy; 2022 mgustavo-portf.com</p>
        </section>
    )
}

export default Footer