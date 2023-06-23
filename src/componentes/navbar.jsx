import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Navbar() {
  return (
    <>
      <div className="overflow-hidden">
        <div className=" header bg-success">

          <nav className="navbar navbar-expand-lg fixed-top bg-success">

            <div className="container d-flex justify-content-between">

              <a className="navbar-brand sticky" href="#"><img style={{width: "160px", height: "80px"}}
                src="./img/logoenblanco.png" alt="" /></a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>

              </button>

              <div className="collapse navbar-collapse p-1 justify-content-end" id="navbarNav">

                <ul className="navbar-nav pt-4 fs-4">

                  <li className="nav-item">

                    <a className="nav-link" aria-current="page" href="#Proyecto"><button type="button"
                      className="btn btn-success">Proyecto</button></a>
                  </li>

                  <li className="nav-item">

                    <a className="nav-link active" href="#Videojuego"><button type="button"
                      className="btn btn-success">Videojuego</button></a>

                  </li>

                  <li className="nav-item">

                    <a className="nav-link active text-light" href="#Integrantes"><button type="button"
                      className="btn btn-success">Integrantes</button></a>

                  </li>

                  <li className="nav-item">

                    <a className="nav-link active text-light" href="#Comentarios"><button type="button"
                      className="btn btn-success">Comentarios</button></a>

                  </li>

                  <li className="nav-item">

                    <a className="nav-link active text-light" href="#Registrate"><button type="button" className="btn btn-success"
                      data-bs-toggle="modal" data-bs-target="#exampleModal">

                      <i className="bi bi-person-circle"></i>

                    </button>

                    </a>

                  </li>
                </ul>

              </div>

            </div>

          </nav>

        </div>
      </div>
    </>
  )
}

export default Navbar