import React from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';

export default function Navbar() {

      const { toggleModals } = useContext(UserContext)
      return (
            <nav className="navbar navbar-light px-4">

                  <Link to="/" className="navbar-brand">
                        AuthJS
                  </Link>
                  <div>
                        <button onClick={() => toggleModals("signUp")} className="btn btn-primary">
                              Inscription
                        </button>
                        <button onClick={() => toggleModals("signIn")} className="btn btn-primary ms-2">
                              Connexion
                        </button>
                        <button className="btn btn-danger ms-2">
                              Deconnexion
                        </button>
                  </div>

            </nav>
      );
}
