// src/components/Quote.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quote.css'; // Import the CSS file for styling

function Quote() {
    const [quote, setQuote] = useState({ text: '', author: '' });

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        const response = await axios.get('http://localhost:5000/quote');
        setQuote(response.data);
    };

    return (
        <div className="quote-container">
            <h1 className="quote-title">Random Quote Generator</h1>
            <div className="quote-box">
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">- {quote.author}</p>
                <button className="quote-button" onClick={fetchQuote}>Get Another Quote</button>
            </div>
        </div>
    );
}

export default Quote;
