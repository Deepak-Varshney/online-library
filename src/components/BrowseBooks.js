import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      (category ? book.category === category : true) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 animate-fadeIn">
          Browse {category ? `${category} Books` : "All Books"}
        </h1>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search by title or author"
            className="w-full md:w-1/2 p-4 border rounded-lg shadow focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{book.title}</h3>
              <p className="text-gray-600 mb-4">by {book.author}</p>
              <Link
                to={`/books/details/${book.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooks;
