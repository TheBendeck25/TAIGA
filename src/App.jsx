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

      <Slider imagen1 = "./img/carrusel11.png" imagen2 = "./img/carrusel222.png" imagen3 = "./img/carrusel33.png"/>

      <Proyecto proyecto = "Taiga es un proyecto enfocado en la conservación de zonas verdes y/o boscosas, nos centramos en el bosque ''Monte Carlo'', ubicado en Manrique Jardín para hacer énfasis en el poco cuidado que recibe este, y fomentar el cuidado de los bosques. Queremos incentivar a futuras generaciones para que cuiden el medio ambiente y los árboles que son nuetra principal fuente de oxígeno, esto se tiene pensado en mensajes, campañas, juegos y streaming hablando sobre los impactos ambientales que generan desastres tales como deforestación, incendios, catástrofes naturales, etc."/>

      <Videojuego juego= "Running Pan es el juego que se creará a partir de nuestra marca, es un juego ''endless running'' en donde tendremos que hacer la mayor cantidad de puntos. Habrán numerosos obstáculos en el camino, donde tendrás que esquivarlos para no perder, tiene una historia tipo comic en donde se mostrará el por qué del acontecimiento de este juego, se está pensando en implementarlo en 2D y 3D. Los controles serán sencillos, saltar y agacharse como cualquier otro endless running, algunos ejemplos de este tipo de juego serían, Banana Kong, Vector o Subway Surfers. Muy pronto para las pantallas Running Pan de Taiga." textbendeck="El diseñador del grupo, su fuerte es la creación de personajes, paisajes y mucho más, tiene muy bien estructurada su línea en diseño gráfico."  textmiguel="Líder de grupo y programador, su fuerte es la creación de contenido en el ámbito de programación de páginas web, diseño de landing pages y programación en general."/> 

      <Integrantes textbendeck = "El diseñador del grupo, su fuerte es la creación de personajes, paisajes y mucho más, tiene muy bien estructurada su línea en diseño gráfico." textmiguel="Líder de grupo y programador, su fuerte es la creación de contenido en el ámbito de programación de páginas web, diseño de landing pages y programación en general."/>

      <Comentarios/>

      <Fotter imagen = "./img/logoenblanco.png"/>
      
    </div>

  )
}

export default App
