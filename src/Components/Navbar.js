import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
      return (
            <nav className="navbar navbar-light px-4">

                  <Link to="/" className="navbar-brand">
                        AuthJS
                  </Link>
                  <div>
                        <button className="btn btn-primary">
                              Inscription
                        </button>
                        <button className="btn btn-primary ms-2">
                              Connexion
                        </button>
                        <button className="btn btn-danger ms-2">
                              Deconnexion
                        </button>
                  </div>

            </nav>
      );
}
