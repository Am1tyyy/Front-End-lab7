import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import ImageControls from './components/ImageControls';

function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <Image />
            <ImageControls />
        </div>
    );
}

export default App;
