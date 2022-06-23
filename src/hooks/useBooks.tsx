import { useEffect, useState } from "react";
import { Book, getBooks } from "../../utils/firebase/books";

export type UseBooksOutput = {
  isLoading: boolean;
  books: Book[];
};

const DEFAULT_OUTPUT: UseBooksOutput = {
  isLoading: true,
  books: [],
};

export default function useBooks(): UseBooksOutput {
  const [output, setOutput] = useState(DEFAULT_OUTPUT);

  useEffect(() => {
    void (async () => {
      const books = await getBooks();
      setOutput({ isLoading: false, books });
    })();
  }, []);

  return output;
}
