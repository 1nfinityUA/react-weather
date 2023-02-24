import React from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchWeather,
    setDays,
    setBlack,
} from "../../redux/slices/weatherSlice";

const Header = () => {
    const days = useSelector((state) => state.weatherSlice.days);
    const black = useSelector((state) => state.weatherSlice.black);
    const location = useSelector((state) => state.weatherSlice.location);
    const dispatch = useDispatch();
    function change(value) {
        dispatch(setDays(value));
        dispatch(fetchWeather({ days, location }));
    }
    function changeBlack() {
        return dispatch(setBlack(!black));
    }
    return (
        <div className={black ? "header-black" : "header"}>
            <div>
                <a href="#" onClick={() => change(1)}>
                    <h3
                        className={
                            black ? "header__title-black" : "header__title"
                        }
                    >
                        Weather
                    </h3>
                </a>
            </div>
            <div className="header__switch">
                <input
                    type="button"
                    value={"black"}
                    className="header__switch-button"
                    onClick={changeBlack}
                />
                <a
                    href="#"
                    className={
                        black
                            ? "header__switch-swichers-black"
                            : "header__switch-swichers"
                    }
                    onClick={() => change(3)}
                >
                    3 days
                </a>
                <a
                    href="#"
                    className={
                        black
                            ? "header__switch-swichers-black"
                            : "header__switch-swichers"
                    }
                    onClick={() => change(7)}
                >
                    7 days
                </a>
                <a
                    href="#"
                    className={
                        black
                            ? "header__switch-swichers-black"
                            : "header__switch-swichers"
                    }
                    onClick={() => change(14)}
                >
                    14 days
                </a>
            </div>
        </div>
    );
};

export default Header;
