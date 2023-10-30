import './App.css';
import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/homepage/IndexPage.jsx';
import Layout from './Layout';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:4000';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  )
}

export default App
