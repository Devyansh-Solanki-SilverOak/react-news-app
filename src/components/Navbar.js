import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id='navbar' className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">News Buzz</Link>
                <button className="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navbarSupportedContent" className="navbar-collapse collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catogory
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">General</Link></li>
                                <li><Link className="dropdown-item" to="/business1">Business</Link></li>
                                <li><Link className="dropdown-item" to="/health1">Health</Link></li>
                                <li><Link className="dropdown-item" to="/sports1">Sports</Link></li>
                                <li><Link className="dropdown-item" to="/entertainment1">Entertaniment</Link></li>
                                <li><Link className="dropdown-item" to="/science1">Science</Link></li>
                                <li><Link className="dropdown-item" to="/technology1">Technology</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;