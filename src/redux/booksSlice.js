import { createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  { id: 1, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", description: "A classic science fiction novel.", rating: 5 },
  { id: 2, title: "1984", author: "George Orwell", category: "Fiction", description: "A dystopian social science fiction novel.", rating: 4 },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
