import React, { useState } from 'react';

function ToggleColors() {
    const [isElement4Toggled, setElement4Toggled] = useState(false);
    const [isElement5Toggled, setElement5Toggled] = useState(false);

    return (
        <div>
            <p>Я народився 12.01.2005 у містечку Кобеляки, що Полтавської області.</p>
            <p>Мною було закінчено 11 класів Кобеляцького ліцею №2, на даний момент навчаюсь на 3 курсі КПІ.</p>

            <h3
                id="element4"
                style={{
                    backgroundColor: isElement4Toggled ? 'lightblue' : '',
                    color: isElement4Toggled ? 'darkblue' : '',
                }}
                onClick={() => setElement4Toggled(!isElement4Toggled)}
            >
                Список моїх хобі:
            </h3>
            <ul>
                <li
                    id="element5"
                    style={{
                        backgroundColor: isElement5Toggled ? 'lightgreen' : '',
                        color: isElement5Toggled ? 'darkgreen' : '',
                    }}
                    onClick={() => setElement5Toggled(!isElement5Toggled)}
                >
                    Бодібілдінг/пауерліфтинг
                </li>
                <li>Геймінг</li>
                <li>Перегляд аніме/серіалів</li>
            </ul>

            <h3>Улюблені фільми:</h3>
            <ol>
                <li>"Бійцівський клуб"</li>
                <li>"Інтерстеллар"</li>
                <li>"Драйв"</li>
            </ol>

            <h3>Місто, яке мені подобається:</h3>
            <p>
            Одеса — це велике портове місто на південному заході України, розташоване на узбережжі Чорного моря. Відоме своєю унікальною архітектурою, багатою історією та культурою, Одеса є важливим транспортним, економічним і культурним центром. Місто славиться теплим кліматом, широкими пляжами, численними музеями, театрами та колоритними ринками. Приморський бульвар, Потьомкінські сходи, Оперний театр та затишні дворики — це лише деякі з визначних місць, які приваблюють туристів до Одеси.
            </p>

            <p>
                <a
                    href="https://uamedtours.com.ua/about-ukraine/city/odesa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Посилання на сайт з цим фото
                </a>
            </p>
        </div>
    );
}

export default ToggleColors;
