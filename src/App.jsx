import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Purchases from './pages/Purchases';
import Monthly from './pages/Monthly';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/monthly" element={<Monthly />} />
      </Routes>
    </Router>
  );
}

export default App;
