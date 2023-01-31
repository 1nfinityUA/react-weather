import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setDays, setBlack } from "../../redux/slices/weatherSlice";

const Header = () => {
    const days = useSelector((state) => state.weatherSlice.days);
    const black = useSelector((state) => state.weatherSlice.black);
    const dispatch = useDispatch();
    function change(value) {
        dispatch(setDays(value));
        dispatch(fetchWeather(days));
    }
    function changeBlack(){
        return dispatch(setBlack(!black))
    }
    return (
        <div className={black ? "header-black" : "header"}>
            <div >
                <Link to="/">
                    <h3 className={black ? "header__title-black" : "header__title"}>Weather</h3>
                </Link>
            </div>
            <div className="header__switch">
                <input
                    type="button"
                    value={"black"}
                    className="header__switch-button"
                    onClick={changeBlack}
                />
                <Link
                    to="/3"
                    className={black ? "header__switch-swichers-black" : "header__switch-swichers"}
                    onClick={() => change(3)}
                >
                    3 days
                </Link>
                <Link
                    to="/7"
                    className={black ? "header__switch-swichers-black" : "header__switch-swichers"}
                    onClick={() => change(7)}
                >
                    7 days
                </Link>
                <Link
                    to="/14"
                    className={black ? "header__switch-swichers-black" : "header__switch-swichers"}
                    onClick={() => change(14)}
                >
                    14 days
                </Link>
            </div>
        </div>
    );
};

export default Header;
