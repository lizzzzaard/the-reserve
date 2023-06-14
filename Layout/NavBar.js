import React from "react";
import "./NavBar.css";

function NavBar () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">The Reserve</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="">Menu</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Order</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item" href=""><a>In-Store Pickup</a></li>
                                    <li className="dropdown-item" href=""><a>Shop</a></li>
                                    <li className="dropdown-item" href=""><a>Local Collaborations</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-dark" type="submit">Search</button>
                           </form>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;