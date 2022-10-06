import ProjectItem from '../components/ProjectsItem'
import { ProjectList } from '../helpers/ProjectList'
import projects from '../styles/projecs.css'

import Contador from '../assets/contador.jfif'
import TodoReact from '../assets/example-three.jpeg'
import GalhoSeco from '../assets/galho-seco.jpeg'
import TodoVanilla from '../assets/todolist.jfif'
import Milhao from '../assets/milhao.jpeg'
import Deploys from '../assets/deploys.svg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {motion} from "framer-motion"
import { Settings } from '@material-ui/icons'

function Projects(){
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
            <div className='ssk'>
            <h3>Área dos Deploys</h3>
            <img src={Deploys}/>

            </div>
            <div className="projectHomeList">
                <Slider {...settings}>
                    <a target="blank" href='https://roda-a-roda.netlify.app'><img src={Milhao}/></a>
                    <a target="blank" href='https://todo-g.netlify.app'><img src={TodoVanilla}/></a>
                    <a target="blank" href='https://rtodo-rlist.netlify.app/'><img src={TodoReact}/></a>
                    <a target="blank" href='https://galhoseco.netlify.app'><img src={GalhoSeco}/></a>
                    <a target="blank" href='https://g-contador.netlify.app'><img src={Contador}/></a>
                </Slider>
            </div>

        </motion.div>
    )
}

export default Projects