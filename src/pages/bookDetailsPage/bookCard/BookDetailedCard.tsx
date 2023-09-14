import { nanoid } from "nanoid";

interface BookDetailedCardProps {
  bookData: {
    title: string;
    authors: string[];
    description: string;
    categories?: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
}

function removeTags(str: string) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}

function BookDetailedCard({ bookData }: BookDetailedCardProps) {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <div className="flex items-center justify-center md:w-1/3 w-full md:h-full">
        <div className="bg-stone-200 w-full md:h-full md:py-0 py-10 flex justify-center items-center">
          <div className="drop-shadow-xl shadow-xl">
            {bookData.imageLinks ? (
              <img
                src={bookData.imageLinks.thumbnail}
                alt=""
                className="w-[13rem] h-[20rem]"
              />
            ) : (
              <img
                src="/default_book_cover_2015.jpeg"
                alt="default image"
                className="w-[13rem] h-[20rem]"
              />
            )}
          </div>
        </div>
      </div>
      <div className="md:w-2/3 md:h-full w-full p-8 overflow-y-scroll">
        {bookData.categories && (
          <div className="flex flex-col text-sm text-gray-700">
            {bookData.categories.map((category) => (
              <h4 key={nanoid()}>{category}</h4>
            ))}
          </div>
        )}
        <h1 className="mt-10 text-3xl">{bookData.title}</h1>
        <h2 className="flex gap-1 text-gray-500 underline">
          {bookData.authors &&
            bookData.authors.map((author, index) => {
              if (bookData.authors?.length > 1) {
                if (index === bookData.authors?.length - 1) {
                  return <span key={nanoid()}>{author}</span>;
                }
                return <span key={nanoid()}>{author},</span>;
              } else return <span key={nanoid()}>{author}</span>;
            })}
        </h2>
        <p className="border border-gray-300 p-4 mt-4">
          {bookData.description ? (
            removeTags(bookData.description)
          ) : (
            <div>No description available</div>
          )}
        </p>
      </div>
    </div>
  );
}

export default BookDetailedCard;
