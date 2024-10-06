import React from 'react';

const QuoteCard = ({ quote, fetchQuote, saveQuote }) => {
  return (
    <div className="bg-white text-gray-900 w-full max-w-md shadow-xl rounded-lg p-6 mb-6 mx-4 sm:mx-auto">
      <p className="text-xl font-semibold text-center">{quote}</p>
      <div className="mt-4 flex flex-col sm:flex-row justify-between">
        <button 
          onClick={saveQuote} 
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200 mb-2 sm:mb-0"
        >
          Save Quote
        </button>
        <button 
          onClick={fetchQuote} 
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
