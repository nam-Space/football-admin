
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from 'utils/ProtectedRoute';
import UserPage from 'pages/UserPage';
import LoginPage from 'pages/LoginPage';
import DashboardPage from 'pages/DashboardPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>} />
      <Route path="/user" element={<ProtectedRoute>
        <UserPage />
      </ProtectedRoute>} />
      <Route path="/login" element={<ProtectedRoute>
        <LoginPage />
      </ProtectedRoute>} />

    </Routes>
  );
}

export default App;
