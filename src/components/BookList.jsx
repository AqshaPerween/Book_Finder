import React from 'react';

const BookList = ({ books }) => { 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 mt-8">
      {books.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">
           Looking for inspiration? Use the search bar to discover books from various genres.
        </p>
      ) : (
        books.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col"
          >
            <div className="h-40 w-full overflow-hidden flex justify-center items-center bg-gray-100 rounded-lg">
              <img
                src={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  'https://via.placeholder.com/128x192'
                }
                alt={book.volumeInfo.title}
                className="h-full max-w-full object-contain"
              />
            </div>
            <h3 className="font-bold mt-2 text-sm">{book.volumeInfo.title}</h3>
            <p class Name="text-gray-600 text-xs">
              {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
