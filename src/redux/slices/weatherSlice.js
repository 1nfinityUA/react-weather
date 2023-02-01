import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async ({ days, location }) => {
        const { data } = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=aeff726d398f4778ab3190306233001&q=${location}&days=${days}`
        );
        return data;
    }
);

const initialState = {
    items: [],
    days: 1,
    black: false,
    location: "Ukraine",
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setDays: (state, action) => {
            state.days = action.payload;
        },
        setBlack: (state, action) => {
            state.black = action.payload;
        },
        setlocation: (state, action) => {
            state.location = action.payload;
        },
    },
    extraReducers: {
        [fetchWeather.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchWeather.rejected]: () => {
            console.log("server reject");
        },
    },
});

export const { setDays, setBlack, setlocation } = weatherSlice.actions;

export default weatherSlice.reducer;
