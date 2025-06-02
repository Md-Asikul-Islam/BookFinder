import BookRow from "./BookRow";

function BookList({ searchTerm, books, onFeatureBook }) {
    const rows = [];
    books.forEach((book) => {
        if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
            return;
        }
        rows.push(<BookRow key={book.id} book={book} onFeatureBook={onFeatureBook} />);
    });

    return <div className="space-y-4">{rows}</div>;
}
export default BookList;