import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Page Not Found</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
