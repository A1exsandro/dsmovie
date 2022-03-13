import {ReactComponent as GitIcon} from '../../assests/img/github.svg';
import './style.css';

function Navbar() {
return (
    <header>
    <nav className='container'>
      <div className='dsmovie-nav-content'>
        <h1>DSMovie</h1>
        <a href="#">
          <div className='dsmovie-contact-container'>
            <GitIcon />
            <p className='dvmovie-contact-link'>/devsuperior</p>
          </div>
        </a>
      </div>
    </nav>
  </header>
);
}

export default Navbar;