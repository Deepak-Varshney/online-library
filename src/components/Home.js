import { Link } from "react-router-dom";

const Home = () => {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];
  const popularBooks = [
    { id: 1, title: "Dune", author: "Frank Herbert" },
    { id: 2, title: "1984", author: "George Orwell" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-wide mb-4 animate-fadeIn">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg font-light mb-6">
            Explore a world of knowledge, fiction, and inspiration.
          </p>
          <Link
            to="/browse-books"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-100 transition"
          >
            Browse Books
          </Link>
        </div>
      </header>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Book Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/books/${category}`}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex justify-center items-center">
                  <span className="text-blue-600 text-2xl font-bold">
                    {category[0]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularBooks.map((book) => (
              <div
                key={book.id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-700 mb-4">by {book.author}</p>
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
      </section>
    </div>
  );
};

export default Home;
