import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Fotter(props) {
    return (
        <div>

            <div className="container-fluid pt-5">

                <div className="row p-5 bg-success text-white">

                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <a className="navbar-brand sticky" href="#"><img style={{ width: "160px", height: "80px" }}
                            src={props.imagen} alt="" /></a>
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p className="h4">Programación</p>
                        <div className="mb-2">

                            <a className="text-light text-decoration-none" href="https://lenguajehtml.com/html/" target="_blank"><button
                                type="button" className="btn btn-success">HTML 5</button></a>
                        </div>

                        <div className="mb-2">
                            <a className="text-light text-decoration-none"
                                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjDhK7b_d7-AhVWj4kEHZgOAjcQFnoECAwQAQ&url=https%3A%2F%2Fgetbootstrap.com%2F&usg=AOvVaw3s0qqZzEfHTiGFr9v0jCTN"
                                target="_blank"><button type="button" className="btn btn-success">Boostrap</button></a>
                        </div>

                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-3">

                        <p className="h4">Links</p>

                        <div className="mb-2">
                            <a className="text-light text-decoration-none" href="#"><button type="button" className="btn btn-success">Terminos y
                                condiciones</button></a>
                        </div>

                        <div className="mb-2">
                            <a className="text-light text-decoration-none" href="#"><button type="button" className="btn btn-success">Politica de
                                privacidad</button></a>
                        </div>

                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-3">

                        <p className="h4">Contacto</p>

                        <div className="mb-2">
                            <a className="text-light text-decoration-none"
                                href="https://www.instagram.com/proyecto_taiga_/?igshid=ZGUzMzM3NWJiOQ%3D%3D" target="_blank"><button
                                    type="button" className="btn btn-success">Instragram</button></a>
                        </div>

                        <div className="mb-2">
                            <a className="text-light text-decoration-none" href="#"><button type="button"
                                className="btn btn-success">Facebook</button></a>
                        </div>

                    </div>

                    <div className="col-xs-12 pt-5">
                        <p className="text-white text-center">Copyright - All right reserver 2023</p>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Fotter