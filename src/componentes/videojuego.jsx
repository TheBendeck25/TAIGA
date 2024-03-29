import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Videojuego(props) {
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
            {props.juego}

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

          <div className='d-flex justify-content-center btn btn-primary btn-lg btn-success'>
          <a className='text-light' href="https://bendeck.itch.io/running-pan">JUEGA AQUÍ</a>
            
          </div>

          <br />
          <br />
          

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

                    <p className="card-text">{props.textbendeck}
                    </p>

                  </div>

                </div>

              </div>

              <div className="col">

                <div className="card">

                  <img src="./img/miguelpeque.png" className="card-img-top" alt="..." />

                  <div className="card-body">

                    <h5 className="card-title">Razor</h5>

                    <p className="card-text">{props.textmiguel}

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