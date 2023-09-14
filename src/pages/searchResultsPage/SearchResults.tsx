import Lottie from "lottie-react";
import { useGetSearchResultsQuery } from "../../services/googleBooksAPI";
import { useAppSelector } from "../../store/hooks";
import BookList from "./books/BookList";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import booksAnimation from "/public/animation_lmj2227o.json";

function SearchResults() {
  const queryParams = useAppSelector((state) => state.queryParams);
  const { data } = useGetSearchResultsQuery(queryParams);

  return (
    <div className="bg-gray-100 w-full h-[80%] flex flex-col justify-center items-center">
      {data ? (
        <BookList data={data} />
      ) : (
        <Lottie
          animationData={booksAnimation}
          loop={false}
          autoplay={true}
        ></Lottie>
      )}
    </div>
  );
}

export default SearchResults;
