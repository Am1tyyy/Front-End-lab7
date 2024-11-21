import React, { useState, useRef } from 'react';

function ImageControls() {
    const [images, setImages] = useState([]); // Стан для зберігання зображень
    const [imageWidth, setImageWidth] = useState(500); // Ширина зображення
    const imgRef = useRef(null);

    // Додавання нового зображення
    const addImage = () => {
        setImages([...images, "Odesa.jpg"]); // Додаємо нове зображення до масиву
    };

    // Збільшення ширини
    const increaseWidth = () => {
        const maxWidth = window.innerWidth - 20;
        if (imageWidth + 50 <= maxWidth) {
            setImageWidth(imageWidth + 50);
        }
    };

    // Зменшення ширини
    const decreaseWidth = () => {
        if (imageWidth > 50) {
            setImageWidth(imageWidth - 50);
        }
    };

    // Видалення зображення
    const deleteImage = () => {
        setImages([]); // Видаляє всі зображення
    };

    return (
        <div>
            <h3>Керування зображеннями:</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
                {images.map((image, index) => (
                    <img
                        key={index} // Унікальний ключ для кожного зображення
                        ref={imgRef}
                        src={image}
                        alt={`Фото Одеси ${index + 1}`}
                        style={{ width: imageWidth }} // Ширина для зображення
                    />
                ))}
            </div>
            <div>
                <button onClick={addImage}>Додати зображення</button>
                <button onClick={increaseWidth}>Збільшити зображення</button>
                <button onClick={decreaseWidth}>Зменшити зображення</button>
                <button onClick={deleteImage}>Видалити зображення</button>
            </div>
        </div>
    );
}

export default ImageControls;
