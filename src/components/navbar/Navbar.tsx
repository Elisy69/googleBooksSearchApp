import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav
      style={{
        backgroundImage: `url("/books.png")`,
      }}
      className="bg-cover w-full h-[20%] text-white shadow-md drop-shadow-xl"
    >
      <div className="p-4 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30">
        <Link to={"/"} className="m-1 pb-4 text-4xl hover:text-gray-200">
          Book search
        </Link>
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
