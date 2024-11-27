import React, { useState } from 'react'; // Imports React library to use JSX and React features like components.
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import FrontPage from './components/FrontPage';
const App = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const API_KEY = 'AIzaSyBk_oB06upy5J3pbw-bbbvUhb7T08u4qbQ'; // Replace with your API Key
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

    try {
      const response = await axios.get(URL);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert("Failed to fetch books. Please try again.");
    }
  };
 
  return (
    <div className="bg-teal-50 min-h-screen p-4">
      <header className="flex flex-col items-center">
        <h1 className="text-3xl font-bold my-4">BookFinder</h1>
        <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      </header>
      <main>
        <BookList books={books} />
      </main>
      <div>
        <FrontPage />
      </div>
    </div>
  );
  
};

export default App;
