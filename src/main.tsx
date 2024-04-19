import React from 'react'
import ReactDOM from 'react-dom/client'
import {Cart} from "./components/Cart/Cart.tsx";


// Implementacja funkcji myClock
window.myClock = () => {
    // Funkcja do formatowania liczby, aby wyglądała jak zegar (dodanie 0 przed liczbą, jeśli jest mniejsza niż 10)
    const formatTimeUnit = (unit: number) => {
        return unit < 10 ? '0' + unit : unit;
    };

    // Pobierz aktualny czas
    const currentTime = new Date();

    // Pobierz godzinę, minuty i sekundy
    const hours = formatTimeUnit(currentTime.getHours());
    const minutes = formatTimeUnit(currentTime.getMinutes());
    const seconds = formatTimeUnit(currentTime.getSeconds());

    // Zbuduj czas w formacie HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Znajdź element zegara na stronie
    const clockElement = document.getElementById('clock');

    // Zaktualizuj tekst zegara
    if (clockElement) {
        clockElement.textContent = timeString;
    }
};

// Wywołaj funkcję myClock co sekundę
setInterval(window.myClock, 1000);

// Wywołanie funkcji po załadowaniu strony
window.onload = () => {
    window.myClock(); // Wywołanie funkcji po załadowaniu strony
};


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div id="clock"></div>
        <Cart/>
    </React.StrictMode>,
)
