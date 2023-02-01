import React from "react";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather, setlocation } from "../../redux/slices/weatherSlice";
import Card from "../Card/Card";

const Home = () => {
    const days = useSelector((state) => state.weatherSlice.days);
    const items = useSelector((state) => state.weatherSlice.items);
    const location = useSelector((state) => state.weatherSlice.location);
    const dispatch = useDispatch();
    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
        });
        function success({ coords }) {
            const { latitude, longitude } = coords;
            const position = latitude + "," + longitude;
            dispatch(setlocation(position));
        }
        function error({ message }) {
            console.log(message);
        }
    }
    React.useEffect(() => {
        getCurrentLocation()
        dispatch(fetchWeather({ days, location }));
    }, [days]);
    return (
        <div className="home">
            {items.length === 0 ? (
                <>Loading</>
            ) : days === 1 ? (
                <div className="home_day1">
                    <img
                        src={items.current.condition.icon}
                        alt="weatherPhoto"
                        width={60}
                        height={60}
                    />
                    <div className="home__city-info">
                        <p>{items.location.country}</p>
                        <p>{items.location.name}</p>
                        <p>{items.location.region}</p>
                        <p>{items.location.localtime}</p>
                    </div>
                    <div className="home__weather">
                        <p>temperature: {items.current.temp_c}c</p>
                        <p>
                            wind: {items.current.wind_kph} km/h{" "}
                            {items.current.wind_dir}
                        </p>
                        <p>fils like: {items.current.feelslike_c}c</p>
                    </div>
                </div>
            ) : (
                <Card />
            )}
        </div>
    );
};

export default Home;
