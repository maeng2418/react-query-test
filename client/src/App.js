import { Route, Routes } from "react-router-dom";
import { BooksList } from "./BooksList";
import { CreateBook } from "./CreateBook";
import { NavBar } from "./shared/NavBar";
import { UpdateBook } from "./UpdateBook";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/update-book/:id" element={<UpdateBook />} />
        <Route path="/" element={<BooksList />} />
      </Routes>
    </>
  );
}

export default App;
