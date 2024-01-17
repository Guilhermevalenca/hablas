import './assets/app.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import socket from './plugins/socket.js';
import HomePage from "./pages/HomePage.jsx";
function App() {
    socket.connect();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout/>}>
                        <Route index element={<HomePage />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;