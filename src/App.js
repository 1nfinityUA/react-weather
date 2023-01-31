import "./styles/App.css";
import React from 'react'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Page3 from "./components/Page3/Page3";
import Page7 from "./components/Page7/Page7";
import Page14 from "./components/Page14/Page14";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./redux/slices/weatherSlice";

function App() {
    const days = useSelector(state => state.weatherSlice.days)
    const items = useSelector(state => state.weatherSlice.items);
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchWeather(days))
    },[]);
    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path="/" element={items.length === 0 ? <>Loading</> : <Home />} />
                <Route path="/3" element={items.length === 0 ? <>Loading</> : <Page3 />} />
                <Route path="/7" element={items.length === 0 ? <>Loading</> : <Page7 />} />
                <Route path="/14" element={items.length === 0 ? <>Loading</> : <Page14 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
