import React from "react";
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
    const items = useSelector(state => state.weatherSlice.items)
    return (
        <div className="home">
            <img src={items.current.condition.icon} alt='weatherPhoto' width={60} height={60}/>
            <div className="home__city-info">
                <p>{items.location.country}</p>
                <p>{items.location.name}</p>
                <p>{items.location.region}</p>
                <p>{items.location.localtime}</p>
            </div>
            <div className="home__weather">
                <p>temperature: {items.current.temp_c}c</p>
                <p>wind: {items.current.wind_kph} km/h {items.current.wind_dir}</p>
                <p>fils like: {items.current.feelslike_c}c</p>
            </div>
        </div>
    );
};

export default Home;
