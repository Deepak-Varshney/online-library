import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((book) => book.id === parseInt(id))
  );

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {book ? (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full mx-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">{book.title}</h2>
          <p className="text-lg text-gray-800 mb-2">Author: {book.author}</p>
          <p className="text-sm text-gray-600 mb-4">{book.description}</p>
          <p className="text-gray-700 mb-4">Rating: {book.rating} / 5</p>
          <Link
            to="/browse-books"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Browse
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">Book not found.</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
