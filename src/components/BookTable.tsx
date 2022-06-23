import { FC } from "react";
import { useBooks } from "../../pages/api/hooks/useBooks";

const BookTable: FC = () => {
  const { isLoading, books } = useBooks();
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} / {book.author} / {book.price}
        </li>
      ))}
    </ul>
  );
};

export default BookTable;
