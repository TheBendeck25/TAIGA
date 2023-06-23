import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Proyecto() {
    return (
        <div>
            <div className="container">

                <div className="py-5" id="Proyecto">

                    <hr />

                </div>
                <div className="flex-row mb-3 overflow-hidden" style={{ marginTop: "80px" }}>

                    <div className="p-2">

                        <h2>Proyecto</h2>

                    </div>

                </div>

                <section>

                    <div className="d-flex flex-column flex-md-row gap-5">

                        <div>

                            <p className='d-flex justify-content-center p-2 col-sm'>
                                Taiga es un proyecto enfocado a la conservacion de zonas "verdes" o "boscosas", nos centramos en el bosque
                                de Monte Carlo ubicado en Manrique Jardin para ser enfasis en el poco cuidado que recibe este y fomentar el
                                cuidado de los bosques.
                                Queremos incentivar a futuras generaciones para que cuiden el medio ambiente y los arboles que son nuetra
                                principal fuente de oxigeno en el ambiente, esto se tiene pensado en mensajes, campañas y directos habando
                                sobre los impactos ambientales que generan desastres tales como deforestacion, incendios, catastrofes
                                naturales, etc.
                            </p>

                        </div>

                        <div className="p-2 col-sm-6">

                            <img id="img1" src="./img/lugar.png" class=" p-2 col-sm-6 rounded-4 w-100" alt="" />

                        </div>

                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between pr-5 pl-5 pt-5 py-3 gap-5">

                        <div className="col-sm justify-content-center">
                            <h2 className="d-flex col-sm justify-content-center">
                                Manual Pich
                            </h2>
                            <iframe className="scribd_iframe_embed pt-5" title="Manual Pich"
                                src="https://www.scribd.com/embeds/651858139/content?start_page=1&view_mode=scroll&access_key=key-kA1clls1BRIuVXxd5crD"
                                tabindex="0" data-auto-height="true" data-aspect-ratio="1.414442700156986" width="100%"
                                height="450" frameborder="0"></iframe>
                            <p
                                style={{ margin: "12px auto 6px auto", fontfamily: "Helvetica,Arial,Sans-serif", fontstyle: "normal", fontvariant: "normal", fontWeight: "normal", fontsize: "14px", lineheight: "normal", fontsizeadjust: "none", fontstretch: "normal", xsystemfont: "none" }}>
                            </p>
                        </div>

                        <div className="col-sm justify-content-center">
                            <h2 className="d-flex col-sm justify-content-center">
                                Manual Corporativo
                            </h2>
                            <iframe className="scribd_iframe_embed pt-5" title="Manual Corporativo (Final) "
                                src="https://www.scribd.com/embeds/651858920/content?start_page=1&view_mode=scroll&access_key=key-ze9Yubkudi2Hx5Vyppql"
                                tabindex="0" data-auto-height="true" data-aspect-ratio="1.414442700156986" width="100%"
                                height="450" frameborder="0"></iframe>
                            <p
                                style={{ margin: "12px auto 6px auto", fontfamily: "Helvetica,Arial,Sans-serif", fontstyle: "normal", fontvariant: "normal", fontWeight: "normal", fontsize: "14px", lineheight: "normal", fontsizeadjust: "none", fontstretch: "normal", xsystemfont: "none" }}>
                            </p>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between pt-5">

                        <div className="d-flex col-sm justify-content-center">
                            <a title="View Manual Pich on Scribd" href="https://www.scribd.com/document/651858139/Manual-Pich#from_embed"
                                style={{ textdecoration: "underline" }} target="_blank">Manual Pich</a> by <a
                                    title="View Miguel Restrepo's profile on Scribd"
                                    href="https://www.scribd.com/user/673358789/Miguel-Restrepo#from_embed" style={{ textdecoration: "underline" }}
                                    target="_blank">Miguel Restrepo</a>
                        </div>

                        <div className="d-flex col-sm justify-content-center">
                            <a title="View Manual Corporativo (Final)  on Scribd"
                                href="https://www.scribd.com/document/651858920/Manual-Corporativo-Final#from_embed"
                                style={{ textdecoration: "underline" }} target="_blank">Manual Corporativo (Final) </a> by <a
                                    title="View Miguel Restrepo's profile on Scribd"
                                    href="https://www.scribd.com/user/673358789/Miguel-Restrepo#from_embed" style={{ textdecoration: "underline" }}
                                    target="_blank">Miguel Restrepo</a>
                        </div>

                    </div>

                </section>

                <div className="py-5" id="Videojuego">

                    <hr />

                </div>
            </div>
        </div>

    )
}

export default Proyecto