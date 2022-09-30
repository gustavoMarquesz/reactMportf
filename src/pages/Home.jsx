import CodeIcon from '@material-ui/icons/Code';
import home from '../styles/home.css'
import projects from '../styles/projecs.css'


import Projects from './Projects';
import Experience from './Experience';
import ProjectItem from '../components/ProjectsItem'
import { ProjectList } from '../helpers/ProjectList'
import { Link } from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GetAppIcon from '@material-ui/icons/GetApp';

import Profile from "../assets/profile-pic.jpg"
import Css from "../assets/css.png"
import Git from "../assets/git.jpg"
import Html from "../assets/html.png"
import Script from "../assets/javascript.png"
import Reacts from "../assets/react.png"


import Java from "../assets/java.png"
import Graddle from "../assets/gradle.png"
import Spring from "../assets/spring.png"
import Security from "../assets/security.png"
import Mysql from "../assets/mysql.png"


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import {motion} from "framer-motion"


function Home(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
      
    
    return(
        <motion.div intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
            <div className="intro">
                <h1 className='typingAnimation'><a target="blank" href='https://github.com/gustavoMarquesz'><GitHubIcon/></a>
                <a target="blank" href="https://wa.me/5581997812345?text=Olá,%20vamos%20desenvolver%20um%20projeto%20juntos!"><WhatsAppIcon/></a>
                <a target="blank" href='https://www.linkedin.com/in/gustavo-marques-818048205/'><LinkedInIcon/></a>
    
                <br/>Hello there, Gustavo Marques aqui!
                <br/><span>Vamos tomar um café, enquanto criamos e desenvolvemos seu projeto</span><span className='coffe'> ☕<br/>
                <a className='cv' href='GustavoCv.docx' download="GustavoCv.docx">resumo do que você vai encontrar aqui? baixa meu currículo <GetAppIcon/></a></span></h1>
                <img src={Profile}/>
            </div>

            
            <div className='slides'>
                <h3>Meus projetos</h3>
                <Slider {...settings}>
                    {ProjectList.map((project, idx)=>(
                        <ProjectItem id={idx} image={project.image} name={project.name} description={project.description}/>
                    ))}
                </Slider>
                <p>Arrasta pro lado pra ver todos |<Link className='link' to="/projects"> confira os deploys aqui</Link></p>
                
            </div>

            

            <div className="projects">
                            
            <details>
            <summary>Projetos mais antigos</summary>
            <div className='writeProjec'>
                <div id="writeProjects">
                    <div className="writeExperiences">
                        <p>
                        .Em umas das minhas mais divertidas e importantes experiências e projetos, foi a Vai de Van, na época meu pai tinha uma van e eu queria ajudar de alguma forma.
                        Foi ai que escrevi um programa simples em Python, usando a interface TKinter para ele, onde o programa mostrava os principais destinos e um calculador por KM.
                        Enfim, era complicado porque não progredi o suficiente para fazer páginas web e de fato levar o conteúdo online para o cliente final, mas foi um bom projeto, pois senti que tentei ajudá-lo de alguma forma.
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p>
                            .Junto com mais dois amigos, estávamos criando criando um projeto FullStack, intitulado: CotinhaFriends (como nome temporário pois ainda estávamos aprimorando os nomes)
                            como linguagem de back-end, usamos JAVA com o FrameWork Springboot, como DataBase: Postgresql, em vez do Maven, escolhemos usar o Graddle, dockerizamos o projeto e implementamos o sawagger.
                            Angular como front (pensamos em trocar mas não tivemos a oportunidade da decisão final) Dividimos as tarefas de cada membro pelo Trello, assim tinhamos controle de quem estava com a tarefa e o status de cada uma. 
                            por fim/infelizmente o projeto não conseguiu ser conclúdo devido aos diferentes caminhos que tomamos durantes os dias e messes, porém estamos perto de estar alinhados e retomar o projeto.    
                            <a href="https://github.com/EduardoHenrique18/cotinha/tree/feature/COT-04" target="_blank" class="dio"> <GitHubIcon/></a>
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p>
                            . FlashLight é um projeto mobile, usando o frame-work React-native. No qual, como o nome ja supõe, liga a lanterna do celular ao balançar o mesmo. O projeto foi pensado e desenhado 
                            pela empresa AVANADE em seu boot-camp na plataforma DIO.
                            <a href="https://github.com/gustavoMarquesz/flashLightDio" target="_blank" class="dio"> <GitHubIcon/></a> 
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p >
                            . Assim como o FlashLight, o pequeno projeto Contador, também foi um desafio proposto pela DIO/AVANADE. Onde o site tem o contatador, porém ele não pode passar de 10 e nem ter números negativos.
                            <a href="https://github.com/gustavoMarquesz/contador" target="_blank" class="dio">  <GitHubIcon/></a> 
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p>
                        .Em um projeto mais pessoal, criei o que eu chamava na época de Alice, basicamente consistia em um projeto mobile, com comandos escritos que faziam certos aplicavos abrirem, escrito em Python.
                        por exemplo "abrir câmera" ativava um evento If e a camera do celular abria depois da voz feminina do google fala "abrindo câmera".
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p>
                            .Para estudar <b>Front-End</b> comecei a replicando o back do App de cotinha que já abordamos aqui, e assim então começar a fazer ele se comunicar com o front, que eu estava 
                            utulizando o ThymeLeaf com HTML + CSS, com alguns scripts em Js já pré-configurados. 
                        </p>
                    </div>
    
             
            </div>
                </div>
            </details>
           
            </div>

            <div className='stacks'>
            <div className='stack'>
                <h2>Skills</h2>
                <h3>Front-End</h3>
               <nav className="botoes">
                   <figure>
                        <img src={Html}/>
                        <figcaption>HTML</figcaption>
                   </figure>

                   <figure>
                        <img src={Css}/>
                        <figcaption>CSS</figcaption>
                   </figure>

                   <figure>
                        <img src={Script}/>
                        <figcaption>JavaScript</figcaption>
                   </figure>

                   <figure>
                        <img src={Reacts}/>
                        <figcaption>ReactJs</figcaption>
                   </figure>

                   <figure>
                        <img src={Git}/>
                        <figcaption>GIT</figcaption>
                   </figure>
               </nav>
           </div>

           <div className='stack'>
                <h3>Back-End</h3>
                <nav className="botoes">
                    
                    <figure>
                        <img src={Java}/>
                        <figcaption>Java</figcaption>
                    </figure>

                    <figure>
                    <   img src={Graddle}/>
                        <figcaption>Graddle</figcaption>
                    </figure>

                    <figure>
                        <img src={Spring}/>
                        <figcaption>Spring-Boot</figcaption>
                    </figure>

                    <figure>
                        <img src={Security} className="security"/>
                        <figcaption>Spring-Security</figcaption>
                    </figure>

                    <figure>
                        <img src={Mysql}/>
                        <figcaption>MySQL server</figcaption>
                    </figure>

                    <figure>
                        <img src={Git}/>
                        <figcaption>GIT</figcaption>
                    </figure>
                
                </nav>
            </div>

            <div>
           <div className='stackExtra'>
                <h3>Extra-skills</h3>
                <nav className="navExtra">
                    <div className='separete'>
                        <p>English</p>
                        <div className='containerSkills'>
                            <div className='skills english'></div>
                        </div>
                    </div>
                    
                    <div className='separete'>
                        <p >Comunicativo</p>

                        <div className='containerSkills'>
                            <div className='skills comunicativo'></div>
                        </div>
                    </div>

                    <div className='separete'>
                        <p >Colaborativo</p>

                        <div className='containerSkills'>
                            <div className='skills equipe'></div>
                        </div>
                    </div>

                    <div className='separete'>
                        <p >Flexível</p>

                        <div className='containerSkills'>
                            <div className='skills flexibilidade'></div>
                        </div>
                    </div>

                    <div className='separete'>
                        <p >Proativo</p>

                        <div className='containerSkills'>
                            <div className='skills proatividade'></div>
                        </div>
                    </div>

                    <div className='separete'>
                        <p >Autocrítico</p>

                        <div className='containerSkills'>
                            <div className='skills critica'></div>
                        </div>
                    </div>
                </nav>
           </div>
            </div>
            </div>
        </motion.div>
    )
}

export default Home