"use client"
import React, { useState, useCallback } from 'react';

const ReadMore = ({ maxHeight = 720, children }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = useCallback(
    () => setIsReadMore(v => !v),
    [setIsReadMore],
  );
  return (
    <div
      className={`readMoreSection ${isReadMore ? 'display' : ''}`}
      style={{ maxHeight: isReadMore ? maxHeight : 120 }}
    >
      <button
        className="readMoreBtn"
        onClick={toggleReadMore}
      >
        {isReadMore ? 'Read Less' : 'Read More'}
      </button>
      {children}
    </div>
  );
};

export default ReadMore;