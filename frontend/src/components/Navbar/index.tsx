import { ReactComponent as GithubIcon } from 'Assets/img/github.svg';
import './styles.css'

function NavBar() {
    return (<header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/MariaMarianaCagnoni"></a>
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/devsuperior</p>
                </div>
            </div>
        </nav>
    </header>
    );
}
export default NavBar;