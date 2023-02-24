import React from "react";
import "./card.css";
import { useSelector } from "react-redux";

const Card = () => {
    const items = useSelector((state) => state.weatherSlice.items);
    const itemsDay = items.forecast.forecastday;
    return (
        <div className="card">
            {itemsDay.map((el, index) => (
                <div key={index} className="cadr__block">
                    <div className="card__img">
                        <img
                            src={el.day.condition.icon}
                            alt="weatherPhoto"
                            width={60}
                            height={60}
                        />
                        <p>{items.location.region}</p>
                        <p>{items.location.name}</p>
                        <p>Date: {el.date}</p>
                    </div>
                    <div className="card__Info">
                        <p>Averege temp: {el.day.avgtemp_c}c</p>
                        <p>Max temp: {el.day.maxtemp_c}c</p>
                        <p>Min temp: {el.day.avgtemp_c}c</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
