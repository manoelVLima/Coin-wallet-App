import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cateira" element={<Wallet />} />
    </Routes>

  )
}

export default App;
