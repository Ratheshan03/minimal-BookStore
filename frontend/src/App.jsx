import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { CreateBooks } from "./pages/CreateBooks.jsx";
import { ShowBook } from "./pages/ShowBook.jsx";
import { EditBook } from "./pages/EditBook.jsx";
import { DeleteBook } from "./pages/DeleteBook.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
