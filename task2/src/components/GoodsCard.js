import React from 'react';

function GoodsCard({ image, name, cost }) {
    return (
        <div
            style={{
                border: '2px solid lightgray',
                padding: '20px',
                textAlign: 'center',
                width: '250px',
                margin: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            className="goods-card"
        >
            <h3
                style={{
                    color: 'blue',
                    fontSize: '18px',
                    margin: '10px 0',
                }}
            >
                {name}
            </h3>
            <img
                src={image}
                alt={name}
                style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'contain',
                    marginBottom: '15px',
                    transition: 'transform 0.3s ease',
                }}
            />
            <p style={{ fontSize: '16px' }}>Cost: {cost} грн</p>
        </div>
    );
}

export default GoodsCard;
