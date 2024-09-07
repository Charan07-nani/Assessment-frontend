import React from 'react';

const SortAndFilter = ({ sortOrder, onSortChange, levelFilter, onLevelFilterChange }) => {
  return (
    <div>
      <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      <select value={levelFilter} onChange={(e) => onLevelFilterChange(e.target.value)}>
        <option value="">All Levels</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default SortAndFilter;
