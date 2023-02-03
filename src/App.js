import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import "./styles/Home.css";
import "./styles/SuggestionMajor.css";
import "./styles/AboutUs.css";
import "./styles/Detail.css";


import Home from "./components/Home";
import SuggestionMajor from "./components/SuggestionMajor";
import AboutUs from "./components/AboutUs";
import Detail from "./components/Detail";
import NoPage from "./components/NoPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}>
                    <Route path="home" />
                    <Route path="home/:page" />
                </Route>
                <Route exact path="/suggestion-major" element={<SuggestionMajor />} />
                <Route exact path="/about-us" element={<AboutUs />} />
                <Route exact path="/detail/:id" element={<Detail />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;