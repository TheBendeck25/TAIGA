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
      <Navbar/>
      <Slider/>
      <Proyecto/>
      <Videojuego/>
      <Integrantes/>
      <Comentarios/>
      <Fotter/>
    </div>

  )
}

export default App
