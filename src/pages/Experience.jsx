import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import "react-vertical-timeline-component/style.min.css"


function Experience(){
    return(
        <section>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement iconStyle={{background: "#3e497a", color: "fff"}} icon={<SchoolIcon/>}>
                    <h3>Escola 2001</h3>
                    <p>Ensino médio | 2015 - 2017</p>
                    <p> Completei o ensino médio em 2017, já gostava muito de programação mas a vida tinha outros planos, ou simplesmente decidi trilhar um caminho diferente na época.</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement  iconStyle={{background: "#3e497a", color: "#fff"}}icon={<SchoolIcon/>}>
                    <h3>Faculdade Frassineti do Recife - FAFIRE</h3>
                    <p>Curso superior | Licenciatura dupla PT/ING | 2018 - 2021</p>
                    <p>Em 2018 me matriculei em Letras, pois gostava muito de inglês, não queria ensinar, mas com essa formação eu pretendia fazer uma Pós-graduação em Tradução.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement iconStyle={{background: "#67B26F", color: "#fff"}}icon={<WorkIcon/>}>
                    <h3>Saber: International School</h3>
                    <p>English Teacher | 2022 - trabalho atual</p>
                    <p>Sim, eu não queria ensinar porém, eu tinha a aptidão, estavam precisando de um professor e vi a oportunidade de crescer e encarar um desafio.</p>
                    <p>Durante este período percebi que gostava de ensinar, porém, eu não iria tão longe quanto eu gostaria.</p>
                    <p>Então decidi voltar a estudar programação com tudo, devido a um Boot-camp que estava acontecendo, onde poderia ter uma vaga de estágio. Não passei mas peguei o gosto e vi o quão eu estava me apaixonando pela área</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement  iconStyle={{background: "#67B26F", color: "#fff"}}icon={<SchoolIcon/>}>
                    <h3>Faculdade Católica Imaculada Conceição do Recife - FICR</h3>
                    <p>Tecnólogo| Análise e Desenvolvimento de Sistemas | 2022 - 2024</p>
                    <p>Para adentrar ainda mais na área, decido então começar um curso presencial na FICR.</p>
                    <p>Não estou sozinho nessa nova jornada, trouxe pessoas importantes comigo e que acreditam na tecnologia.</p>
                    <p>E ca estou aqui novamente, escrevendo várias linhas de código, como se fosse antigamente, não confundo este sentimento como nostalgia mas como finalmente ter encontrado um lugar acolhedor e que ao mesmo tempo é desafiador (e bastante). Talvez, a gente sempre volta aos velhos lugares onde amou a vida</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    )
}

export default Experience