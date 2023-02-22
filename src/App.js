import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
       </Routes>
    </div>
  );
}

export default App;
