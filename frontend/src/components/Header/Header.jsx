import React, { useRef, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';
import { AuthContext } from '../../context/AuthContext';

const nav__links = [
  { 
    path: '/home', 
    display: 'Home'
  },
  { 
    path: '/about', 
    display: 'About' 
  },
  { 
    path: '/tours', 
    display: 'Tours' 
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  // Sticky header
  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    };

    window.addEventListener('scroll', stickyHeaderFunc);
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <Link to="/home"><img src={logo} alt="logo" /></Link>
            </div>

            {/* Navigation menu */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={({ isActive }) => isActive ? 'active__link' : ''}>{item.display}</NavLink>
                  </li>
                ))}
                {/* Show auth buttons inside menu on mobile */}
                <li className="mobile__auth">
                  {user ? (
                    <>
                      <h5 className="mb-0">{user.username}</h5>
                      <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                    </>
                  ) : (
                    <>
                      <button className="btn secondary__btn"><Link to="/login">Login</Link></button>
                      <button className="btn primary__btn"><Link to="/register">Register</Link></button>
                    </>
                  )}
                </li>
              </ul>
            </div>

            {/* Right section */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-none d-md-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                  </>
                ) : (
                  <>
                    <button className="btn secondary__btn"><Link to="/login">Login</Link></button>
                    <button className="btn primary__btn"><Link to="/register">Register</Link></button>
                  </>
                )}
              </div>

              {/* Hamburger menu for mobile */}
              <span className="mobile__menu d-md-none" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
