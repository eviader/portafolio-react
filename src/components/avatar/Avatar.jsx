import "../avatar/Avatar.css"
import perfilImg from "../../assets/full-body-avatar-transparent.png"

const IMG_AVATAR =  perfilImg

//Creamos el componente que contiene la imegen pricipal de la web
function Avatar() {

    return (
      <>
            <img className="img-home-pefil" src={IMG_AVATAR} alt="img-avatar" />
      </>
    )
  }
  
  export default Avatar;