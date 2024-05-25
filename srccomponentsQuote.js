// src/components/Quote.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Random Quote</h1>
            <p>"{quote.text}"</p>
            <p>- {quote.author}</p>
            <button onClick={fetchQuote}>Get Another Quote</button>
        </div>
    );
}

export default Quote;
