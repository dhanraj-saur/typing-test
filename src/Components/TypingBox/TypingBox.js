import React, { useState, useEffect } from 'react'
import "./style.css"
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';

const TypingBox = () => {

    const [countdown, setCountdown] = useState(15);
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);
    const [inputText, setInputText] = useState('');
    const [correctCharacters, setCorrectCharacters] = useState(0);
    const [incorrectCharacters, setIncorrectCharacters] = useState(0);
    const [missedCharacters, setMissedCharacters] = useState(0);
    const [extraCharacters, setExtraCharacters] = useState(0);

   
    useEffect(() => {
        let timer;

        if (testStart && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        }

        if (countdown === 0) {
            setTestEnd(true);
            clearInterval(timer);
          
        }

        return () => clearInterval(timer);
    }, [countdown, testStart]);

    let para = "A paragraph is a group of sentences that elaborate on a common idea, creating units or sections throughout a longer written piece. Paragraphs can be as short as a single word and as long as a writer desires. A good paragraph consists of a topic sentence (or key sentence), relevant supporting sentences, and a transition or concluding sentence. This structure is key to keeping your paragraph focused on the main idea and creating a clear and concise image."
    let keychar = 0
    return (


        <div>
            <div className='time-button'>
                <div>{countdown}</div>
                <Button variant="contained">Contained</Button>
                <div>
                    <button className='btn' onClick={() => setTimeout(15)}>15s</button>
                    <button className='btn' onClick={() => setTimeout(30)}>30s</button>
                    <button className='btn' onClick={() => setTimeout(60)}>60s</button>
                </div>
            </div>
            <div className='textbox'>
                {
                    para.split("").map((char) => (<span key={'char' + (keychar++)}>{char}</span>))
                }
            </div>
        </div>
    )
}

export default TypingBox;