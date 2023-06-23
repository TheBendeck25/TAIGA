import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Integrantes() {
    return (
        <div>
    
            <div className="container">
                
                <div className="d-flex flex-row mb-3">

                    <div>

                        <h2>Integrantes</h2>

                    </div>

                </div>

                <section>

                    <div className="row row-cols-1 row-cols-sm-3 g-5 justify-content-center pt-3 gap-5">

                        <div className="col col">

                            <div className="card">

                                <img src="./img/bendeckk.jpg"  className="card-img-top" alt="..." />

                                <div className="card-body">

                                    <h5 className="card-title">Alejandro Bendeck</h5>

                                    <p className="card-text">El diseñador del grupo, su fuerte es la creacion de personajes, paisajes y mucho mas,
                                        tiene muy bien estructurada su linea en diseño grafico.
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="col">

                            <div className="card">

                                <img src="./img/miguell.jpg" className="card-img-top" alt="..." />

                                <div className="card-body">

                                    <h5 className="card-title">Miguel Restrepo</h5>

                                    <p className="card-text">Lider de grupo y programador, su fuerte es la creacion de contenido en el ambito de
                                        programacion de paginas web, diseño de landing pages y programación en general.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>
            </div>
        </div>

    )
}

export default Integrantes