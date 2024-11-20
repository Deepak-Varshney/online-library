import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Predefined categories
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((field) => field === "")) {
      setError("All fields are required");
      return;
    }
    dispatch(addBook({ id: Date.now(), ...form }));
    navigate("/browse-books");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center ">Add a New Book</h1>
      <form
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-4 border rounded-lg"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        {/* Author Input */}
        <input
          type="text"
          placeholder="Author"
          className="w-full p-3 mb-4 border rounded-lg"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />

        {/* Category Dropdown */}
        <select
          className="w-full p-3 mb-4 border rounded-lg bg-white"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="" disabled>
            Select a Category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Description Input */}
        <textarea
          placeholder="Description"
          className="w-full p-3 mb-4 border rounded-lg"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        {/* Rating Input */}
        <input
          type="number"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          className="w-full p-3 mb-4 border rounded-lg"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
