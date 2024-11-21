import React from 'react';
import GoodsCard from './components/GoodsCard';
import './App.css'; // Підключення CSS стилів

function App() {
    const goods = [
        { id: 1, image: 'Shaker.png', name: 'Шейкер Biotech', cost: 200 },
        { id: 2, image: 'table.png', name: "Дубовий комп'ютерний стіл Ferrum", cost: 1900 },
        { id: 3, image: 'artisan.png', name: 'Ігрова поверхня Artisan Hayate Otsu', cost: 2000 },
        { id: 4, image: 'akko.png', name: 'Механічні перемикачі Akko V3 (20 шт.)', cost: 600 },
        { id: 5, image: 'hator.png', name: 'Геймерське крісло Hator', cost: 7000 },
        { id: 6, image: 'monitor.png', name: "Монітор 24' BenQ Zowie XL2411P", cost: 6300 },
    ];

    return (
        <div className="App">
            <div className="goods-grid">
                {goods.map((item) => (
                    <GoodsCard key={item.id} image={item.image} name={item.name} cost={item.cost} />
                ))}
            </div>
        </div>
    );
}

export default App;
