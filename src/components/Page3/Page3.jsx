import React from 'react';
import './page3.css';
import { useSelector } from "react-redux";

const Page3 = () => {
    const items = useSelector(state => state.weatherSlice.items);
    const itemsDay = items.forecast.forecastday
    console.log(itemsDay);
  return (
    <div className='page3'>{itemsDay.map((el, index) => (
        <div key={index} className='page3__weather'>
            <div className='page3__img'>
                <img src={itemsDay[index].day.condition.icon} alt="weatherPhoto" width={60} height={60}/>
                <p>Date: {itemsDay[index].date}</p>
            </div>
            <div className='page3__Info'>
                <p>Averege temp: {itemsDay[index].day.avgtemp_c}c</p>
                <p>Max temp: {itemsDay[index].day.maxtemp_c}c</p>
                <p>Min temp: {itemsDay[index].day.avgtemp_c}c</p>
            </div>
        </div>
    ))}
        
    </div>
  )
}

export default Page3