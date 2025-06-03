import { Star } from "lucide-react";

function FeatureBook({ book, onFeatureBook }) {
  return (
    <button className="cursor-pointer" onClick={() => onFeatureBook(book.id)}>
      <Star color={book.featured ? "Yellow" : "Black"} />
    </button>
  );
}

export default FeatureBook;
