import classes from '../styles/Nav.module.css';
import Account from './Account';
import logo from "../assets/images/logo-bg.png";

export default function Nav() {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={logo} alt="React Quiz App" />
              <h3>React Quiz App</h3>
            </a>
          </li>
        </ul>
        <Account/>
      </nav>
    </>
  );
}
