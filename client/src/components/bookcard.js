const BookCard = (props) => {
    
    return (
      <div className={"book-section"}>
        <div className='book-text'>{props.book.title}</div>
        <div className='answer-section'>
        </div>
      </div>
    );
  };

export default BookCard;