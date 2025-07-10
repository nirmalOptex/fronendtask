import React, { useEffect, useState } from "react";

const ApiDemo = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books"
        className="border p-2 rounded mb-4 w-full max-w-md"
      />
      <button
        onClick={fetchBooks}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Search
      </button>

      {loading && <p>Loading books...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => {
          const info = book.volumeInfo;
          return (
            <div key={book.id} className="border p-2 rounded">
              <img
                src={
                  info.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/128x192?text=No+Image"
                }
                alt={info.title}
                className="mb-2 mx-auto"
              />
              <h3 className="text-sm font-semibold">{info.title}</h3>
              <p className="text-xs text-gray-600">
                {info.authors?.join(", ")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApiDemo;
