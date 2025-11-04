import "../avatar/Avatar.css"
import perfilImg from "../../assets/full-body-avatar-transparent.png"

const IMG_AVATAR =  perfilImg

//Creamos el componente que contiene la imegen pricipal de la web
function Avatar() {

    return (
      <>
          <div className="img-container">
            <img className="img-home-pefil" src={IMG_AVATAR} alt="Avatar ilustrado de cuerpo completo de Emanuel Viader" />
          </div>
      </>
    )
  }

  export default Avatar;