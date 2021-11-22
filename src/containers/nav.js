import { Link } from "react-router-dom";
import world from '../images/world.png'

const Nav = () => {
    return (
        <nav>
            <Link to="/" class="home-button"><img src={world} className="menu-icon"/></Link>
        </nav>
    )
}

export default Nav;