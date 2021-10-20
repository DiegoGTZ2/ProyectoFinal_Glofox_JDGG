import React, { Component } from "react"

class Registro extends Component {


    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className="ed-grid">

                <div className="main-banner img-container" id="main-banner"   >

                    <div className="ed-grid lg-grid-6">
                        <div className="lg-cols-4 lg-x-2" >
                            <img className="main-banner__img" src="https://www.verywellmind.com/thmb/iCn7L3emFP_-LVclC_ZvXEIGADE=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-591406431-588a77183df78caebc334e1d.jpg" />

                            <div className="main-banner__data s-center">

                                <p className="t2 s-mb-0"  > Registro</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="s-cross-center">
                    <img src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere.png" width="80" class="s-mr-2" />

                </div>


                <form >
                    <div className="form_item">
                        <label>Ingresa Nombre</label>
                        <input type="text" />
                    </div>
                    <div className="form_item">
                        <label>Ingresa Apellidos</label>
                        <input type="text" />
                    </div>
                    <div className="form_item">
                        <label>Ingresa Edad</label>
                        <input type="number" />
                    </div>
                    <div className="form_item">
                        <label>Ingresa Email</label>
                        <input type="email" />
                    </div>

                    <div class="s-main-center">
                        <a class="button s-mr-2 s-mb-2 m-mb-0" href="./"  >Regresar</a>
                        <a class="button s-mr-2 s-mb-2 m-mb-0"  >Registrar</a>

                    </div>

                </form>

                <div className="main-banner img-container" id="main-banner"   >

                    <div className="ed-grid lg-grid-6">
                        <div className="lg-cols-4 lg-x-2" >
                            <img className="main-banner__img" src="https://www.verywellmind.com/thmb/iCn7L3emFP_-LVclC_ZvXEIGADE=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-591406431-588a77183df78caebc334e1d.jpg" />

                            <div className="main-banner__data s-center">

                                <p className="t2 s-mb-0"  > GYM Glofox</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Registro;