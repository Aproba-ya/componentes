import {Link} from "react-router-dom";
import "Navbar.css"

const Navbar = () => {
    const Header = ()=>{
        <container>
            <div>
                <img>//logo</img>
                <img>//Login</img>
                <img>//burger</img>
            </div>
            <div>
                <input type="text" />//search bar
            </div>
        </container>
    }
  return (
    <Header></Header>
  )
}

export default Navbar