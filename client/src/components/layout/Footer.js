import  logo_white  from '../../assets/logos/logo_white.png'
import { Link } from 'react-router-dom';

const Footer = () =>{
        return(
            <div className="footer-wrapper">
                <footer id="footer" className="footer" role="contentinfo">
                    <div className="footer__logo-wrapper" tabIndex="0">
                        <Link to="/home" aria-label="Kasa Home page"><img src={logo_white} alt="logo" className="main-logo"/></Link>
                    </div>
                    <div className="footer__credentials">
                        <p>© 2020 Kasa. All rights reserved</p>
                    </div>
                </footer>
            </div>
        )
}
export default Footer