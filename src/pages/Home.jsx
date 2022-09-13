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
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Profile from "../assets/profile-pic.jpg"


function Home(){
    
    return(
        <section>
            <div className="intro">
                <h1 className='typingAnimation'><a target="blank" href='https://github.com/gustavoMarquesz'><GitHubIcon/></a>
                <a target="blank" href='https://www.linkedin.com/in/gustavo-marques-818048205/'><LinkedInIcon/></a>
                <a target="blank"  href='https://www.instagram.com/gustavo.marquesz/'><InstagramIcon/></a><br/>Hello there, Gustavo Marques aqui!
                <br/><span>Vamos tomar um café, enquanto criamos e desenvolvemos seu projeto</span><span className='coffe'> ☕</span></h1>
                <img src={Profile}/>
            </div>

            <Experience/>

            <div className="projects">
                <h2>Meus projetos</h2>
                <div className="projectList">
                    {ProjectList.map((project, idx)=>{
                        return <ProjectItem id={idx} name={project.name} image={project.image}/>
                    })}
            </div>

            <Link className="link" to="/projects">Confere aqui como os sites ficaram!</Link>

            <h3>Projetos mais antigos</h3>
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
            </div>


            <div className='stacks'>
            <div className='stack'>
                <h2>Skills</h2>
                <h3>Front-End</h3>
               <nav className="botoes">
                   <p className="botao">HTML</p>
                   <p className="botao">CSS</p>
                   <p className="botao">JavaScript</p>
                   <p className="botao">GIT</p>
                   <p className="botao">ReactJs</p>
                   <p className="botao">Noção em responsividade</p>
               </nav>
           </div>

           <div className='stack'>
                <h3>Back-End</h3>
                <nav className="botoes">
                <p className="botao">java</p>
                <p className="botao">Maven</p>
                <p className="botao">Graddle</p>
                <p className="botao">SpringBoot</p>
                <p className="botao">Spring Security</p>
                <p className="botao">MYSQL server</p>
                <p className="botao">GIT</p>
                </nav>
            </div>

            <div>
           <div className='stack'>
                <h3>Extra-skills</h3>
                <nav className="botoes">
                    <p className="botao">Advanced English</p>
                    <p className="botao">Comunicativo</p>
                    <p className="botao">Trabalho em equipe</p>
                    <p className="botao">Flexibilidade</p>
                    <p className="botao">Proatividade</p>
                    <p className="botao">Resiliência</p>
                    <p className="botao">Autocrítica</p>
                </nav>
           </div>
            </div>
            </div>
        </section>
    )
}

export default Home