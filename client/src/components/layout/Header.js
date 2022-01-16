import Nav from '../elements/Nav'
import  logo from '../../assets/logos/logo.png'
import { Link } from 'react-router-dom';

const Header =() => {

        return (
            <div id="header-wrapper" className="header-wrapper">
                <header id="header" className="header" role="banner">
                    <div id="header__logo-wrapper" className="header__logo-wrapper" tabIndex="0">
                        <Link to="/"  aria-label="Kasa Home page"><img src={logo} alt="logo" className="main-logo"/></Link>
                    </div>
                    <div className="nav-wrapper">
                        <Nav />
                    </div>
                </header>
            </div>
        )
}

export default Header