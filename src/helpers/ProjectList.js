import Contador from '../assets/contador.jfif'
import TodoReact from '../assets/example-three.jpeg'
import GalhoSeco from '../assets/galho-seco.jpeg'
import TodoVanilla from '../assets/todolist.jfif'

export const ProjectList = [
    {
        name: "Todo-List | HTML, CSS e JS Vanilla",
        image: TodoVanilla,
        description: "Como o título sugere, ele foi feito com estas tecnologias. Foi o primeiro projeto todo que fiz. Muito bom para treinar operações de CRUD"
    },

    {
        name: "Todo-List | React",
        image: TodoReact,
        description: "Diria que este Todo foi um Upgrade, adaptado e redesenhado para Todo e atender minhas necessidades de estudo. Existem duas versões dele, um usando Json-server para fazer a requisições e outro usando o local storage"
    },

    {
        name: "Ateliê Galho Seco",
        image: GalhoSeco,
        description: "Visando ajudar meus pais, que começaram um negocio, mais precisamente um ateliê e estudar HTML + CSS, fiz uma página estática para eles. "
    },

    {
        name: "DecolaTech Counter",
        image: Contador,
        description: "Desafio proposto no bootCamp da dio Avanade-DecolaTech, onde o contador não conta números negativos e só até 10."

    }
  
]

