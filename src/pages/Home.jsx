import CodeIcon from '@material-ui/icons/Code';
import home from '../styles/home.css'
import projects from '../styles/projecs.css'


import Projects from './Projects';
import Experience from './Experience';
import ProjectItem from '../components/ProjectsItem'
import { ProjectList } from '../helpers/ProjectList'
import { ProfessionalProjectList } from '../helpers/ProfessionalProjectList';
import { Link } from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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

import Nebulosa from "../assets/nebuu.jpg"
import Moon from "../assets/website.svg"
import Skills from "../assets/skills.svg"
import ProjectImg from "../assets/code.svg"



import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import {motion} from "framer-motion"
import Aos from "aos"
import "aos/dist/aos.css"

import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';



import { useEffect } from 'react';


function Home(){

    useEffect(()=>{
        Aos.init({duration: 2000})

    },[])

    
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
            style={{ ...style, display: "block", background: "#21325e", borderRadius: "50%"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#21325e",  borderRadius: "50%" }}
            onClick={onClick}
          />
        );
      }
      
    
    return(
        <motion.div intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
            <div className="intro" >
                <Fade>
                    <h1 className=''><a target="blank" href='https://github.com/gustavoMarquesz'><GitHubIcon/></a>
                    <a target="blank" href="https://wa.me/5581997812345?text=Ol??,%20vamos%20desenvolver%20um%20projeto%20juntos!"><WhatsAppIcon/></a>
                    <a target="blank" href='https://www.linkedin.com/in/gustavo-marques-818048205/'><LinkedInIcon/></a>
                    
                    <br/>Hello there, Gustavo Marques aqui!
                    <br/><span>Vamos tomar um caf??, bater um papo e desenvolver seu projeto</span><span className='coffe'> ???<br/></span></h1>
                    <img src={Moon}/> 
                </Fade>
            </div>

            
            <div class="custom-shape-divider-bottom-1664601271">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
             </div>
            
            
            <div className='homeAboutMe'>
                <div className='descriptionTwo'>
                    <p> <i>Projetos completos</i> <br/> <strong> 08+</strong></p>
                    <p> <i>Tempo de experi??ncia</i> <br/> 03 messes</p>
                    <a className='cv' href='GustavoCv.docx' download="GustavoCv.docx"> <i className='curriculo'>Curr??culo  Download<GetAppIcon/></i></a>
                </div>

                <Jump><img src={Profile}/></Jump>

                <div className='descriptionOne'>
                    <p> <i>Short Biography</i> <br/> English teacher to Front-end Developer, estilizando p??ginas web de alto n??vel para voc??.</p>
                    <p> <i>Servi??os</i> <br/>Landing Pages, blogs, sites completos e muito mais.</p>
                    <p> <i>Contato</i> <br/> gustavo99a@hotmail.com (81)997812345</p>
                </div>   
                            

            </div>

            <div className='ssk'>
                <h3>Projetos</h3>
                <img src={ProjectImg}/>

            </div>

            <div className='slides'>
            <Fade bottom>
                <h3>Profissionais</h3>
                <Slider {...settings}>
                        {ProfessionalProjectList.map((project, idx)=>(
                            <ProjectItem id={idx} image={project.image} name={project.name} description={project.description}/>
                            
                        ))}
                    </Slider>
               </Fade>

                <h3>Pessoais</h3>
               <Fade bottom>
                <Slider {...settings}>
                        {ProjectList.map((project, idx)=>(
                            <ProjectItem id={idx} image={project.image} name={project.name} description={project.description}/>
                        ))}
                    </Slider>
               </Fade>
                <p><Link className='link' to="/projects"> confira os deploys aqui</Link></p>
                
            </div>

            

            <div className="projects">
                            
            <details>
            <summary>Projetos mais antigos</summary>
            <div className='writeProjec'>
                <div id="writeProjects">
                    <div className="writeExperiences">
                        <p>
                        .Em umas das minhas mais divertidas e importantes experi??ncias e projetos, foi a Vai de Van, na ??poca meu pai tinha uma van e eu queria ajudar de alguma forma.
                        Foi ai que escrevi um programa simples em Python, usando a interface TKinter para ele, onde o programa mostrava os principais destinos e um calculador por KM.
                        Enfim, era complicado porque n??o progredi o suficiente para fazer p??ginas web e de fato levar o conte??do online para o cliente final, mas foi um bom projeto, pois senti que tentei ajud??-lo de alguma forma.
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p>
                            .Junto com mais dois amigos, est??vamos criando criando um projeto FullStack, intitulado: CotinhaFriends (como nome tempor??rio pois ainda est??vamos aprimorando os nomes)
                            como linguagem de back-end, usamos JAVA com o FrameWork Springboot, como DataBase: Postgresql, em vez do Maven, escolhemos usar o Graddle, dockerizamos o projeto e implementamos o sawagger.
                            Angular como front (pensamos em trocar mas n??o tivemos a oportunidade da decis??o final) Dividimos as tarefas de cada membro pelo Trello, assim tinhamos controle de quem estava com a tarefa e o status de cada uma. 
                            por fim/infelizmente o projeto n??o conseguiu ser concl??do devido aos diferentes caminhos que tomamos durantes os dias e messes, por??m estamos perto de estar alinhados e retomar o projeto.    
                            <a href="https://github.com/EduardoHenrique18/cotinha/tree/feature/COT-04" target="_blank" class="dio"> <GitHubIcon/></a>
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p>
                            . FlashLight ?? um projeto mobile, usando o frame-work React-native. No qual, como o nome ja sup??e, liga a lanterna do celular ao balan??ar o mesmo. O projeto foi pensado e desenhado 
                            pela empresa AVANADE em seu boot-camp na plataforma DIO.
                            <a href="https://github.com/gustavoMarquesz/flashLightDio" target="_blank" class="dio"> <GitHubIcon/></a> 
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p >
                            . Assim como o FlashLight, o pequeno projeto Contador, tamb??m foi um desafio proposto pela DIO/AVANADE. Onde o site tem o contatador, por??m ele n??o pode passar de 10 e nem ter n??meros negativos.
                            <a href="https://github.com/gustavoMarquesz/contador" target="_blank" class="dio">  <GitHubIcon/></a> 
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p>
                        .Em um projeto mais pessoal, criei o que eu chamava na ??poca de Alice, basicamente consistia em um projeto mobile, com comandos escritos que faziam certos aplicavos abrirem, escrito em Python.
                        por exemplo "abrir c??mera" ativava um evento If e a camera do celular abria depois da voz feminina do google fala "abrindo c??mera".
                        </p>
                    </div>

                    <div className="writeExperiences">
                        <p>
                            .Para estudar <b>Front-End</b> comecei a replicando o back do App de cotinha que j?? abordamos aqui, e assim ent??o come??ar a fazer ele se comunicar com o front, que eu estava 
                            utulizando o ThymeLeaf com HTML + CSS, com alguns scripts em Js j?? pr??-configurados. 
                        </p>
                    </div>
    
             
            </div>
                </div>
            </details>
           
            </div>
            
            <div className='ssk'>
                <h3>My Skills</h3>
                <img className='skillsImg' src={Skills}/>
            </div>
            <div className='stacks'>
            <div className='stack'>
                <h3 className='teste'>Front-end: </h3>
               <nav className="botoes">
                   <figure>
                        <img src={Html}/>
                        <figcaption>HTML</figcaption>
                        <figcaption>Intermediate</figcaption>
                   </figure>

                   <figure>
                        <img src={Css}/>
                        <figcaption>CSS</figcaption>
                        <figcaption>Intermediate</figcaption>
                   </figure>

                   <figure>
                        <img src={Script}/>
                        <figcaption>JavaScript</figcaption>
                        <figcaption>Intermediate</figcaption>
                   </figure>

                   <figure>
                        <img src={Reacts}/>
                        <figcaption>ReactJs</figcaption>
                        <figcaption>Intermediate</figcaption>
                   </figure>

                   <figure>
                        <img src={Git}/>
                        <figcaption>GIT</figcaption>
                        <figcaption>Intermediate</figcaption>
                   </figure>
               </nav>
           </div>

           <div className='stack'>
                <h3 className='teste'>Back-end: </h3>
                <nav className="botoes">
                    
                    <figure>
                        <img src={Java}/>
                        <figcaption>Java</figcaption>
                        <figcaption>Intermediate</figcaption>
                    </figure>

                    <figure>
                    <   img src={Graddle}/>
                        <figcaption>Graddle</figcaption>
                        <figcaption>Basic</figcaption>
                    </figure>

                    <figure>
                        <img src={Spring}/>
                        <figcaption>Spring-Boot</figcaption>
                        <figcaption>Basic</figcaption>
                    </figure>

                    <figure>
                        <img src={Git}/>
                        <figcaption>GIT</figcaption>
                        <figcaption>Intermediate</figcaption>
                    </figure>

                    
                    <figure>
                        <img src={Mysql}/>
                        <figcaption>MySQL server</figcaption>
                        <figcaption>Basic</figcaption>
                    </figure>
                
                </nav>
            </div>

            <div>
          
            </div>
            </div>

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
                        <p >Flex??vel</p>

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
                        <p >Autocr??tico</p>

                        <div className='containerSkills'>
                            <div className='skills critica'></div>
                        </div>
                    </div>
                </nav>
           </div>
        </motion.div>
    )
}

export default Home