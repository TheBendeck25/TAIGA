import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Videojuego() {
  return (
    <div>
      <div className="container">

      <div className="d-flex justify-content-center flex-row mb-3 overflow-hidden">

        <div>

          <h2>Videojuego</h2>

        </div>

      </div>

      <section>

        <div className="row d-flex flex-row gap-5 pt-3">

          <div className="col-sm">

            <p>
              Running Pan es el juego que se creara a partir de nuestra marca, es un juego endless running en donde
              tendremos que hacer la mayor cantidad de puntos.
              Habran numerosos obstaculos en el camino, tendras que esquivarlos para no perder, tiene una historia (tipo
              comic) en donde se mostrara el porque del acontecimiento de este juego, se esta pensando implementarlo en 2D
              y 3D.
              Los controles seran snecillos, saltar y agacharse como cualquuiera otro endless running, algunos ejemplos
              que se podrian decir de este tipo de juego serian, Bana Kong, Vector o Subway Surfers.
              Muy pronto para las pantallas Running Pan de Taiga.

            </p>

          </div>

        </div>

        <div className="row d-flex flex-row gap-5 pt-3">

          <div className="col-sm">

            <h3>¿Qué es Running Pan?</h3>

            <div className="pt-3">

              <video id="animacion" width="100%" src="./vid/Teaser _ Running Pan(1).mp4" className="rounded-4 p-2"
                controls></video>

            </div>

          </div>

          <div className="col-sm">

            <h3>Teaser</h3>

            <div className="pt-3">

              <video id="animacion" width="100%" src="./vid/animacionnfinalnana___79636d7c21f2963___ (1) (1).mp4"
                className="rounded-4 p-2" controls></video>

            </div>

          </div>

        </div>

        <div className="py-4">

          <hr />

        </div>

          <section>

            <div className="col-sm">

              <h2 className="posicion">Personajes</h2>

            </div>

            <div className="row row-cols row-cols-sm-3 g-5 pt-5 justify-content-center gap-5">

              <div className="col col">

                <div className="card">

                  <img src="./img/bendeckpeque.png" className="card-img-top" alt="..." />

                  <div className="card-body">

                    <h5 className="card-title">Lalo</h5>

                    <p className="card-text">El diseñador del grupo, su fuerte es la creacion de personajes, paisajes y mucho
                      mas, tiene muy bien estructurada su linea en diseño grafico.
                    </p>

                  </div>

                </div>

              </div>

              <div className="col">

                <div className="card">

                  <img src="./img/miguelpeque.png" className="card-img-top" alt="..." />

                  <div className="card-body">

                    <h5 className="card-title">Razor</h5>

                    <p className="card-text">Lider de grupo y programador, su fuerte es la creacion de contenido en el ambito de
                      programacion de paginas web, diseño de landing pages y uso de variables.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>
        

      </section>

      <div class="py-5" id="Integrantes">

        <hr />
      </div>
      </div>
    </div>


  )
}

export default Videojuego