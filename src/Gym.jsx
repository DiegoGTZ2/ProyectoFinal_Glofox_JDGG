import React from "react";

const Gym  = props => (
    <>

        <section class="l-section s-py-4">

            <div class="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">

                <div class="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
                    <h1>{props.titulo}</h1>
                    <p>{props.detalle}</p>

                    <div class="s-main-center">
                      
                        <a class="button s-mr-2 s-mb-2 m-mb-0" href={props.Link} >Ingresar</a>
                        
                    </div>
                </div>

                <div>
                    <div class="img-container s-ratio-16-9">
                        <img className="s-radius-1" src={props.imagen}  alt="description of image" />
                    </div>
                </div>

            </div>
        </section>

    </>





)

export default Gym;