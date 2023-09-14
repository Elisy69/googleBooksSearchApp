import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/svg/SearchIcon";
import {
  searchForNewValue,
  selectCategory,
  selectSortOption,
} from "../../features/googleBooks/queryParamsSlice";
import { googleBooksApi } from "../../services/googleBooksAPI";

const categoryOptions = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

const sortOptions = ["relevance", "newest"];

function SearchBar() {
  const [searchedValue, setSearchedValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSortOption, setSelectedSortOption] = useState("relevance");

  const dispatch = useDispatch();

  function clearCache() {
    dispatch(googleBooksApi.util.resetApiState());
  }

  function newSearch() {
    clearCache();
    dispatch(searchForNewValue(searchedValue));
  }

  function handleSelectCategory() {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCategory(e.target.value);
    };
  }

  function handleSelectSortOption() {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedSortOption(e.target.value);
    };
  }

  function handleSearchedValue() {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchedValue(e.target.value);
    };
  }

  function handlePressEnter() {
    return (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        newSearch();
      }
    };
  }

  useEffect(() => {
    clearCache();
    dispatch(selectCategory(selectedCategory));
  }, [selectedCategory]);

  useEffect(() => {
    clearCache();
    dispatch(selectSortOption(selectedSortOption));
  }, [selectedSortOption]);

  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="w-full flex items-center justify-center">
        <input
          type="search"
          className="p-1 outline-none w-[55%] text-black"
          value={searchedValue}
          onChange={handleSearchedValue()}
          onKeyDown={handlePressEnter()}
        />
        <Link
          to={"/"}
          onClick={newSearch}
          className="bg-white hover:bg-gray-200 p-[0.05rem] border-l-2"
        >
          <SearchIcon />
        </Link>
      </div>
      <div className="w-full sm:flex-row flex flex-col items-center justify-center gap-4">
        <div className="flex gap-2">
          <div>Categories</div>
          <select
            className="text-black"
            value={selectedCategory}
            onChange={handleSelectCategory()}
          >
            {categoryOptions.map((category) => (
              <option key={nanoid()} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <div>Sort by</div>
          <select
            className="text-black"
            value={selectedSortOption}
            onChange={handleSelectSortOption()}
          >
            {sortOptions.map((sortOption) => (
              <option key={nanoid()} value={sortOption}>
                {sortOption}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
