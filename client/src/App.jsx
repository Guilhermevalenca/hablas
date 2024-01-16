import './assets/app.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import './index.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <DefaultLayout />}>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;