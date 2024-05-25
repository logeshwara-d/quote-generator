const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { text: "Courage is found in unlikely places.", author: "J.R.R. Tolkien" },
    { text: "You can never get a cup of tea large enough or a book long enough to suit me.", author: "C.S. Lewis" },
    { text: "We are what we believe we are.", author: "C.S. Lewis" },
    { text: "War is peace. Freedom is slavery. Ignorance is strength.", author: "George Orwell" },
    { text: "In a time of deceit telling the truth is a revolutionary act.", author: "George Orwell" },
    { text: "Words can be like X-rays if you use them properly—they’ll go through anything. You read and you’re pierced.", author: "Aldous Huxley" },
    { text: "Experience is not what happens to you; it's what you do with what happens to you.", author: "Aldous Huxley" },
    // Add more quotes here
];

app.get('/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
