import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((num) => (
        <button key={num} onClick={() => onPageChange(num)}>{num}</button>
      ))}
    </div>
  );
};

export default Pagination;
