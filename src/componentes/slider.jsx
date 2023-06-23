import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Slider() {
    return (
        <div style={{marginTop: "150px"}}>
            
            <div className='container d-flex justify-content-center'>

                <div id="carouselExampleIndicators" className="carousel slide align-items-center">

                    <div className="carousel-indicators">

                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>

                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>

                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>

                    </div>

                    <div className="carousel-inner rounded-5 ">

                        <div className="carousel-item active">
                            <img src="./img/carrusel1.png" className="d-block" alt=""/>
                        </div>

                        <div className="carousel-item">
                            <img src="./img/carrusel2.png" className="d-block" alt=""/>
                        </div>

                        <div className="carousel-item">
                            <img src="./img/carrusel3.png" className="d-block" alt=""/>
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>

            </div>
            </div>
        
    )
}

export default Slider