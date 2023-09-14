import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useGetBookByIdQuery } from "../../services/googleBooksAPI";
import BookDetailedCard from "./bookCard/BookDetailedCard";

function BookDetails() {
  const { bookId } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(bookId);

  return (
    <div className="w-full h-[80%] flex justify-center items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <BookDetailedCard bookData={data.volumeInfo} />
      )}
    </div>
  );
}

export default BookDetails;
