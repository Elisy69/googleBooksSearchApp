import { nanoid } from "nanoid";
import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface BookCardProps {
  id: string;
  imageLink?: string;
  category?: string[];
  bookTitle: string;
  authors?: string[];
}

const BookCard = memo(function BookCard({
  id,
  imageLink,
  category,
  bookTitle,
  authors,
}: BookCardProps) {
  return (
    <Link
      to={`/books/${id}`}
      className="flex flex-col border-2 p-4 cursor-pointer hover:shadow-lg bg-stone-200"
    >
      <div className="flex justify-center items-center p-4 h-[70%]">
        <div className="drop-shadow-2xl shadow-xl overflow-hidden">
          {imageLink ? (
            <LazyLoadImage
              className="object-cover w-[9rem] h-[14rem]"
              src={imageLink}
              alt="book cover"
              effect="opacity"
            />
          ) : (
            <LazyLoadImage
              src="public/default_book_cover_2015.jpeg"
              alt="book cover"
              className="object-cover w-[9rem] h-[14rem]"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col h-[30%]">
        <span className="mb-2 underline text-amber-800 text-sm">
          {category ? category[0] : ""}
        </span>
        <div className="font-bold mb-1 max-h-[4rem] line-clamp-2">
          {bookTitle}
        </div>
        <div className="truncate pb-2">
          {authors
            ? authors.map((author, index) => {
                if (authors.length > 1) {
                  if (index === authors.length - 1) {
                    return (
                      <span className="mr-1" key={nanoid()}>
                        {author}
                      </span>
                    );
                  }
                  return (
                    <span className="mr-1" key={nanoid()}>
                      {author},
                    </span>
                  );
                } else
                  return (
                    <span className="mr-1" key={nanoid()}>
                      {author}
                    </span>
                  );
              })
            : "Authors not specified"}
        </div>
      </div>
    </Link>
  );
});

export default BookCard;
