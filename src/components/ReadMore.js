"use client"
import React, { useState } from 'react';

const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <div className={`readMoreSection ${isReadMore ? 'display' : ''}`}>
      <button
        className="readMoreBtn"
        onClick={() => setIsReadMore(v => !v)}
      >
        {isReadMore ? 'Read Less' : 'Read More'}
      </button>
      {children}
    </div>
  );
};

export default ReadMore;