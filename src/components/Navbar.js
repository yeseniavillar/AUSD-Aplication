import "../styles/navbar.css";
import Logo from "../assets/LogoUASD1.png";



function Navbar() {

  return (
    <div className='navbar'>
      <div className="leftSide">
      <img src={Logo}/>
      <h1>UASD</h1>
      </div>
      <div className="rightSide">
           <h1>Programacion IV</h1>
      </div>
      
    </div>
  )
}

export default Navbar