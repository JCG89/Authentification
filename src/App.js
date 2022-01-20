import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil';
import Navbar from './Components/Navbar'
import InscriptionModal from './Components/InscriptionModal';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <InscriptionModal />
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
