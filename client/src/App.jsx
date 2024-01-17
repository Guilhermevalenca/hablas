import './assets/app.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import socket from './plugins/socket.js';
import HomePage from "./pages/HomePage.jsx";
import LoginPage from './pages/Auth/LoginPage.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';
function App() {
    socket.connect();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout/>}>
                        <Route index element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;