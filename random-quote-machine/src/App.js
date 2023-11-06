import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling" },
  { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
  { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
];

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); 
    setQuote(quotes[randomIndex]); 
  };
  

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div id="quote-box" className="text-center p-4 rounded shadow">
        <div id="text" className="mb-2">{quote.text}</div>
        <div id="author" className="mb-4">- {quote.author}</div>
        <div className="button-container"> {/* Removed d-flex justify-content-between align-items-center */}
          <button id="new-quote" className="btn btn-primary my-2" onClick={fetchQuote}>New Quote</button> {/* Add my-2 for margin */}
          <a id="tweet-quote" className="btn btn-info my-2" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text + ' - ' + quote.author)}`} target="_blank" rel="noopener noreferrer">Tweet</a>
        </div>
      </div>
    </div>
  );
  
}

export default App;
