import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/"><h1 className="text-lg font-bold tracking-wide">Online Library</h1></Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-blue-300 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/browse-books"
              className="hover:text-blue-300 transition duration-200"
            >
              Browse Books
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className="hover:text-blue-300 transition duration-200"
            >
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
