import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PetList from './pages/PetList';
import PetForm from './pages/PetForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/add-pet" element={<PetForm />} />
      </Routes>
    </Router>
  );
}
export default App;
