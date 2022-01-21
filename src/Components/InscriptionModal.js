import React from 'react';
/** J'importe useContext et le context que je vais utiliser UserContext */
import { useContext, useState, useRef } from "react"
import { UserContext } from '../context/UserContext'

export default function InscriptionModal() {

      const { toggleModals, modalState } = useContext(UserContext)
      const [validation, setValidation] = useState("")

      /** On selectionne les inputs */
      const inputs = useRef([])
      const addInputs = el => {
            // eslint-disable-next-line no-lone-blocks
            {/** Si l'element existe et qu'il n'est pas déjà dans mon tableau  alors je le rajoute */ }
            if (el && !inputs.current.includes(el)) {
                  inputs.current.push(el)
            }
      }
      const handleForm = e => {
            e.preventDefault()
            // eslint-disable-next-line no-lone-blocks
            {/** validation des données côté front en comparant la valeur de la longueur des données */ }
            if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
                  setValidation(" votre mot de passe doit contenir 6 caractére min")
                  return;
                  {/** comparaison des mots de passe  */ }
            } if ((inputs.current[1].value !== inputs.current[2].value)) {
                  setValidation(" Les mots de passe ne correspondent pas !")
                  return;
            }
      }
      return (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <>
                  {modalState.signUpModal && (
                        <div className="position-fixed top-0 vw-100 vh-100">
                              {/**J'ajoute l'overlay*/}
                              <div onClick={() => toggleModals("close")} className="w-100 h-100 bg-dark bg-opacity-75">
                              </div>
                              <div className="position-absolute top-50 start-50 translate-midle" style={{ minWidth: "600px" }}>
                                    <div className="modal-dialog">
                                          <div className="modal-content">
                                                <div className="modal-header">
                                                      <h5 className="modal-title">Inscription</h5>
                                                      {/**J'execute la function toggleModal pour fermer la modale */}
                                                      <button onClick={() => toggleModals("close")} className="btn-close"></button>
                                                </div>
                                                {/** le corp de la modal */}
                                                <div className="modal-body">
                                                      <form onSubmit={handleForm} className="sign-up-form">
                                                            <div className="mb-3">
                                                                  <label className="form-label" htmlFor='signUpEmail'> Email</label>
                                                                  <input
                                                                        ref={addInputs}
                                                                        name="email"
                                                                        required
                                                                        type="email" className="form-control"
                                                                        id="signUpEmail" />
                                                            </div>
                                                            <div className="mb-3">
                                                                  <label className="form-label" htmlFor='signUpEmail'> Mot de passe </label>
                                                                  <input
                                                                        ref={addInputs}
                                                                        name="password"
                                                                        required
                                                                        type="password" className="form-control"
                                                                        id="signUpPw" />
                                                            </div>
                                                            <div className="mb-3">
                                                                  <label className="form-label" htmlFor='signUpEmail'> Confirmer votre mot de passe </label>
                                                                  <input
                                                                        ref={addInputs}
                                                                        name="password"
                                                                        required
                                                                        type="password" className="form-control"
                                                                        id="signUpPwConfirm" />
                                                                  <p className="text-danger mt-1">{validation}</p>
                                                            </div>
                                                            <button className="btn  btn-primary">S'inscrire</button>
                                                      </form>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  )}

            </>
      );
}
