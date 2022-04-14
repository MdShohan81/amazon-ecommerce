
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth)
  }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3  sticky-top" >
        <div className="container">
        <Link to="/"> <img src={logo} alt="brand" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link hover-effect" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link hover-effect" to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link hover-effect" to="/inventory">Inventory</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link hover-effect" to="/about">About</Link>
              </li>
              <li className="nav-item">
              {
                user?
                <button className="btn text-light" onClick={handleSignOut}>sign out</button>
                :
                <Link className="nav-link hover-effect" to="/login">Login</Link>
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;