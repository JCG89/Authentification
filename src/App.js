import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil';
import Navbar from './Components/Navbar'
import InscriptionModal from './Components/InscriptionModal';
import UserContextProvider from './context/UserContext';
function App() {
  return (
    <UserContextProvider>
      <Router>
        <InscriptionModal />
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
