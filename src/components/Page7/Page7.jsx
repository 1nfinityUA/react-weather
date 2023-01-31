import React from 'react';
import './page7.css';
import { useSelector } from 'react-redux';

const Page7 = () => {
    const items = useSelector(state => state.weatherSlice.items);
    const itemsDay = items.forecast.forecastday
    console.log(itemsDay);
  return (
    <div className='page7'>{itemsDay.map((el, index) => (
        <div key={index} className='page7__weather'>
            <div className='page7__img'>
                <img src={itemsDay[index].day.condition.icon} alt="weatherPhoto" width={60} height={60}/>
                <p>Date: {itemsDay[index].date}</p>
            </div>
            <div className='page7__Info'>
                <p>Averege temp: {itemsDay[index].day.avgtemp_c}c</p>
                <p>Max temp: {itemsDay[index].day.maxtemp_c}c</p>
                <p>Min temp: {itemsDay[index].day.avgtemp_c}c</p>
            </div>
        </div>
    ))}
        
    </div>
  )
}

export default Page7