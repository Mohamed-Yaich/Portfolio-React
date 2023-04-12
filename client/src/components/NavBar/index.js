import { NavLink } from "react-router-dom";
import './style.scss';

function NavBar () {

    return (

        <nav className="navigation">
            <div className="navigation-marque">
                <h1>Développeur Full Stack</h1>
                <span>Mohamed-Ali YAICH</span>
            </div>
            <ul className="navigation-ul">
                <li className="navigation-li"><NavLink className="navigation-link" to='/'>Profil</NavLink></li>
                <li className="navigation-li"><NavLink className="navigation-link" to='/skills'>Compétences</NavLink></li>
                <li className="navigation-li"><NavLink className="navigation-link" to='/projects'>Projets</NavLink></li>
                <li className="navigation-li"><NavLink className="navigation-link" to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;