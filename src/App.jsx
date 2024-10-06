import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import SavedQuotesList from './components/SavedQuotesList';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };

  const saveQuote = () => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([quote, ...savedQuotes]);
    }
  };

  const deleteQuote = (quoteToDelete) => {
    setSavedQuotes(savedQuotes.filter(q => q !== quoteToDelete));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center py-4">
      <h1 className="text-4xl font-bold mb-6">Random Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} fetchQuote={fetchQuote} saveQuote={saveQuote} />
      {savedQuotes.length > 0 && <SavedQuotesList quotes={savedQuotes} deleteQuote={deleteQuote} />}
    </div>
  );
};

export default App;
