import { Route, Routes } from "react-router";
import Navbar from "./components/navbar/Navbar";
import BookDetails from "./pages/bookDetailsPage/BookDetails";
import SearchResults from "./pages/searchResultsPage/SearchResults";

function App() {
  return (
    <div className="w-full h-[100%] flex flex-col justify-center items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchResults />}></Route>
        <Route path="/books/:bookId" element={<BookDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
