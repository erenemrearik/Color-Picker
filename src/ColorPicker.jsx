import React, { useState } from 'react';
import { CgColorPicker } from "react-icons/cg";

function ColorPicker() {
    const [color, setColor] = useState('#000000');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(color)
        document.getElementById('copied-message').style.display = 'block';
        document.getElementById('info').style.display = 'none';
        setTimeout(() => {
            document.getElementById('copied-message').style.display = 'none';
            document.getElementById('info').style.display = 'block';
        }, 1500);
    }

    return (
        <>
            <div className='color-picker-container'>
                <h1><CgColorPicker /> Color Picker</h1>
                <p id='info'>Click on the color to copy it to your clipboard.</p>
                <p id='copied-message' style={{ display: 'none' }}>The selected color has been copied successfully.</p>
                <div className='color-display' style={{ backgroundColor: color }}>
                    <p onClick={copyToClipboard} style={{ cursor: 'pointer' }}> Selected Color: {color}</p>
                </div>
                <label>Select a Color:</label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
            <footer>
                <img src="./src/assets/react.svg" alt="React Logo" />
                <p>Color Picker made with React</p>
        </footer>
        </>
    );
}

export default ColorPicker;