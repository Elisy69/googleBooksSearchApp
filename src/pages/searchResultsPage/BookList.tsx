import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { loadMoreBooks } from "../../features/googleBooks/queryParamsSlice";
import { Book } from "../../types/book";
import BookCard from "./BookCard";

interface BookListProps {
  data: {
    kind: string;
    totalItems: string;
    items: Book[];
  };
}

function BookList({ data }: BookListProps) {
  const dispatch = useDispatch();
  function handleLoadMore() {
    dispatch(loadMoreBooks());
  }

  return (
    <div className="flex flex-col h-full overflow-y-scroll overflow-x-hidden">
      <div className="m-4 text-center">Found {data.totalItems} results</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-12 lg:gap-8 gap-4 px-24">
        {data.items.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            imageLink={book.volumeInfo.imageLinks?.thumbnail}
            category={book.volumeInfo?.categories}
            bookTitle={book.volumeInfo.title}
            authors={book.volumeInfo?.authors}
          />
        ))}
      </div>
      <footer className="flex justify-center items-center m-10">
        <button
          onClick={handleLoadMore}
          className="border-2 p-1 w-[12%] h-12 self-center m-4 hover:bg-stone-200"
        >
          Load more
        </button>
      </footer>
    </div>
  );
}

export default BookList;
