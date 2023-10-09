import { Link} from 'react-router-dom'; 
import Logo from '../../assets/argentBankLogo.webp'

import './header.css'


function Hearder () {
    return(
    <nav class="main-nav">
        <Link to="/" className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
            />
            <h1 class="sr-only">Argent Bank</h1>
        </Link>
        <div>
            <Link to="/SignIn" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {" "}Sign In
            </Link>
        </div>
    </nav>
    )
}

export default Hearder