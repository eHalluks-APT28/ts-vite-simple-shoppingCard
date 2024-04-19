import React from 'react'
import ReactDOM from 'react-dom/client'
import {Cart} from "./components/Cart/Cart.tsx";

window.myClock = () => {
    const formatTimeUnit = (unit: number) => {
        return unit < 10 ? '0' + unit : unit;
    };
    const currentTime = new Date();
    const hours = formatTimeUnit(currentTime.getHours());
    const minutes = formatTimeUnit(currentTime.getMinutes());
    const seconds = formatTimeUnit(currentTime.getSeconds());
    const timeString = `${hours}:${minutes}:${seconds}`;
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
};

setInterval(window.myClock, 1000);

window.onload = () => {
    window.myClock();
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div id="clock"></div>
        <Cart/>
    </React.StrictMode>,
)
