/** Création du context */
import { createContext, useState, useEffect } from 'react'


/**Création du context */
export const UserContext = createContext()
/** Création d'une function sup  pour englober tous les composants */
export function UserContextProvider(props) {

      const [modalState, setModalState] = useState({
            signUpModal: false, signInModal: false
      })
      const toggleModals = modal => {
            if (modal === "signIn") {
                  setModalState({
                        signUpModal: false,
                        signInModal: true
                  })
            }
            if (modal === "signUp") {
                  setModalState({
                        signUpModal: true,
                        signInModal: false
                  })
            }
            if (modal === "close") {
                  setModalState({
                        signUpModal: false,
                        signInModal: false
                  })
            }
      }

      return (
            // eslint-disable-next-line no-sequences
            <UserContext.Provider value={{ modalState, toggleModals }}>
                  {props.children}
            </UserContext.Provider>
      )
}
export default UserContextProvider