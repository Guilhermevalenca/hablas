import './assets/app.css';
import './plugins/axios.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import socket from './plugins/socket.js';
import HomePage from "./pages/HomePage.jsx";
import LoginPage from './pages/Auth/LoginPage.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';
import ProfilePage from './pages/User/ProfilePage.jsx';
import AllChats from './pages/Chat/AllChats.jsx';
import CreateChat from "./pages/Chat/CreateChat.jsx";
import Chat from "./pages/Chat/Chat.jsx";
import VerifyAuth from "./pages/Auth/VerifyAuth.jsx";

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

                        <Route element={ <VerifyAuth />}>

                            <Route path="/profile" element={ <ProfilePage />} />

                            <Route path="/chat" element={ <AllChats />} />
                            <Route path="/createChat" element={ <CreateChat />} />
                            <Route path="/chat/:id" element={ <Chat />} />

                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;