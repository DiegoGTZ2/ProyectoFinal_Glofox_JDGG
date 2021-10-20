import React from "react";
import Gym from './Gym';


const Banner  =() => (

    <>
 
    <div className="main-banner img-container" id="main-banner"   >

      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2" >
          <img className="main-banner__img" src="https://www.verywellmind.com/thmb/iCn7L3emFP_-LVclC_ZvXEIGADE=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-591406431-588a77183df78caebc334e1d.jpg" />

          <div className="main-banner__data s-center">

            <h1 className="t2 s-mb-0"  >Bienvenido GYM Glofox</h1>
            <a href="/Registro" className="button">Registrate</a>
          </div>
        </div>
      </div>
    </div>



    <Gym
      titulo="Conoce las instalaciones de Glofox"
      detalle="Con lo mas nuevo en aparatos!!!"
      imagen="https://blog.smartfit.com.mx/wp-content/uploads/2020/08/21.png" 
      Link="./Instalaciones"/>

    <Gym
      titulo="Conoce las difentes sucursales"
      detalle="Siempre hay una cerca de ti!!!"
      imagen="https://previews.123rf.com/images/bsd555/bsd5551704/bsd555170400147/75737958-icono-de-ubicaci%C3%B3n-de-gimnasio-suelta-el-s%C3%ADmbolo-de-silueta-de-puntero-de-mapa-de-sombra-barbell-en-.jpg" />
    <Gym
      titulo="Conoce los programas que tenemos para ti"
      detalle="Contamos con todo tipo de programas para hacer ejercicio!!!"
      imagen="https://i.pinimg.com/originals/09/42/55/0942555f75fc9ec33c3b5231e587b0e9.jpg" 
      Link="./Programas"/>

    <Gym
      titulo="Las mejores dietas a tu medida"
      detalle="Contamos con nutriologos y los mejores suplementos alimenticios!!!"
      imagen="https://pbs.twimg.com/media/CvOrrWpUIAAt_SC.jpg" />

<Gym
      titulo="Concursos a nivel nacional"
      detalle="Contamos con el primer lugar en fisicoculturismo!!!"
      imagen="https://st2.depositphotos.com/4841797/7448/i/950/depositphotos_74484829-stock-photo-bodybuilder-gym-logo.jpg" />

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

  </>

)

export default Banner;