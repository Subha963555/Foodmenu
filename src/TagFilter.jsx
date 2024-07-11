import React from 'react';
import './index.css'; 

const TagFilter = ({ tags, selectTag }) => {
  return (
    <div className="tag-filter fade-in">
      <h2>Filter by Tag</h2>
      {tags.map(tag => (
        <button key={tag.id} onClick={() => selectTag(tag.id)}>
          {tag.label}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
