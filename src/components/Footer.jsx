import rodaPe from '../styles/rodaPe.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';




function Footer(){
    return(
        <section className="footer">
            <div>
                <a target="blank" href='https://github.com/gustavoMarquesz'><GitHubIcon/></a>
                <a target="blank" href='https://www.linkedin.com/in/gustavo-marques-818048205/'><LinkedInIcon/></a>
                <a target="blank" href="https://wa.me/5581997812345?text=Olá,%20vamos%20desenvolver%20um%20projeto%20juntos!"><WhatsAppIcon/></a>
            </div>
            <p>&copy; 2022 mgustavo-portf</p>
        </section>
    )
}

export default Footer