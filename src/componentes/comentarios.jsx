import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Comentarios() {
    return (
        <div>
            <div className="container">
                <div className="py-5" id="Comentarios">

                    <hr />

                </div>

                <div className="d-flex flex-row mb-3">

                    <div>

                        <h2>Comentarios</h2>

                    </div>

                </div>

                <section>

                    <div className="row row-cols-1 row-cols-md-3 g-5 justify-content-center pt-3">

                        <form className="row g-3 px-5">

                            <div className="col-md-6 ">
                                <label for="inputFirstName" className="form-label  fw-bolder ">Nombre</label>
                                <input type="text" className="form-control fw-semibold" id="inputFirstName4" />
                            </div>

                            <div className="col-md-6">
                                <label for="inputLastName4" className="form-label fw-bolder">Apellido</label>
                                <input type="text" className="form-control fw-semibold" id="inputLastName4" />
                            </div>

                            <div className="col-12">
                                <label for="inputEmail4" className="form-label fw-bolder">Correo electrónico</label>
                                <input type="text" className="form-control fw-semibold" id="inputEmail4" />
                            </div>

                            <div className="col-12">
                                <label className="form-label fw-bolder" for="inputcomentario">Comentario</label>
                                <textarea className="form-control fw-semibold" placeholder="Dejanos tu comentario"
                                    id="inputcomentario"></textarea>

                            </div>

                            <div className="col-12 text-center d-grid">
                                <button id="enviar" type="submit" className="btn btn-success border border-0">Enviar</button>
                            </div>

                        </form>
                    </div>
                </section>
            </div>
        </div>


    )
}

export default Comentarios