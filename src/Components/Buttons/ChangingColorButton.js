import React, { useEffect, useState } from 'react'
import "./style.css"

const ChangingColorButton = () => {

    const [theme, setTheme] = useState("Colored-light");

    const themeColor = (value) => {
        setTheme(value);
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (
        <div className='color-btn' >
            <select className='select' onChange={(e) => themeColor(e.target.value)}>
                <option value="Colored-light">Colored-light</option>
                <option value="Colored-Blue">Colored-Blue</option>
                <option value="Colored-Pink">Colored-Pink</option>
                <option value="Colored-Green">Colored-Green</option>
                <option value="Colored-Dark">Colored-Dark</option>
                <option value="Colored-Gray">Colored-Gray</option>
                <option value="Colored-Purple">Colored-Purple</option>
            </select>

        </div>
    )

}

export default ChangingColorButton;

