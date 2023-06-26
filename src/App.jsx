import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './componentes/navbar.jsx'
import Slider from './componentes/slider'
import Proyecto from './componentes/proyectos'
import Videojuego from './componentes/videojuego'
import Integrantes from './componentes/integrantes'
import Comentarios from './componentes/comentarios'
import Fotter from './componentes/fotter'

function App() {


  return (
    <div>
      <Navbar imageninicio = "./img/logoenblanco.png"/>

      <Slider imagen1 = "./img/carrusel1.png" imagen2 = "./img/carrusel2.png" imagen3 = "./img/carrusel3.png"/>

      <Proyecto proyecto = "Taiga es un proyecto enfocado a la conservacion de zonas verdes o boscosas, nos centramos en el bosque de Monte Carlo ubicado en Manrique Jardin para ser enfasis en el poco cuidado que recibe este y fomentar el cuidado de los bosques. Queremos incentivar a futuras generaciones para que cuiden el medio ambiente y los arboles que son nuetra principal fuente de oxigeno, esto se tiene pensado en mensajes, campañas y directos hablando sobre los impactos ambientales que generan desastres tales como deforestación, incendios, catastrofes naturales, etc."/>

      <Videojuego juego= "Running Pan es el juego que se creara a partir de nuestra marca, es un juego endless running en dondetendremos que hacer la mayor cantidad de puntos. Habran numerosos obstaculos en el camino, tendras que esquivarlos para no perder, tiene una historia (tipo comic) en donde se mostrara el porque del acontecimiento de este juego, se esta pensando implementarlo en 2Dy 3D. Los controles seran snecillos, saltar y agacharse como cualquuiera otro endless running, algunos ejemplos que se podrian decir de este tipo de juego serian, Bana Kong, Vector o Subway Surfers. Muy pronto para las pantallas Running Pan de Taiga."/>

      <Integrantes textbendeck = "El diseñador del grupo, su fuerte es la creacion de personajes, paisajes y mucho mas, tiene muy bien estructurada su linea en diseño grafico." textmiguel="Lider de grupo y programador, su fuerte es la creacion de contenido en el ambito de programación de paginas web, diseño de landing pages y programación en general."/>

      <Comentarios/>

      <Fotter imagen = "./img/logoenblanco.png"/>
      
    </div>

  )
}

export default App
