import { BookData } from "@/types";

export const fetchOneBook = async (id: number): Promise<BookData | null> => {
  const url = `https://onebite-books-server-three-chi.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw null;
  }
};