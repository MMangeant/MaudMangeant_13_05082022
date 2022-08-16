import logo from '../assets/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="main-nav">
        <NavLink className='main-nav-logo' to='/'>
          <img src={logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <NavLink className='main-nav-item' to='/sign-in'>
            <i className="fa fa-user-circle"></i>
            Sign In
        </NavLink>
      </nav>

      {/* <nav className="main-nav">
        <NavLink className='main-nav-logo' to='/'>
          <img src={logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
      <div>
        <NavLink className='main-nav-item' to='/user'>
          <i class="fa fa-user-circle"></i>
          Tony
        </NavLink>
        <NavLink className='main-nav-item' to='/'>
          <i class="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    </nav> */}
    </>
  );
}

export default Header;
