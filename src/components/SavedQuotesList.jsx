import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const SavedQuotesList = ({ quotes, deleteQuote }) => {
  return (
    <div className="w-full max-w-md mt-8 mx-4 sm:mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Saved Quotes</h2>
      <ul className="space-y-4">
        {quotes.map((q, index) => (
          <li 
            key={index} 
            className="bg-gray-700 text-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <span className="flex-1">{q}</span>
            <button 
              onClick={() => deleteQuote(q)} 
              className="text-red-500 hover:text-red-700 transition duration-200"
            >
              <FaTrashAlt size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedQuotesList;
