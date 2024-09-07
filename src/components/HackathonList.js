import React, { useState } from 'react';
import HackathonCard from './HackathonCard';
import SearchBar from './SearchBar';
import SortAndFilter from './SortAndFilter';

const HackathonList = ({ hackathons }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [levelFilter, setLevelFilter] = useState('');

  const filteredHackathons = hackathons
    .filter(hackathon => 
      hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (levelFilter === '' || hackathon.level === levelFilter)
    )
    .sort((a, b) => 
      sortOrder === 'newest'
        ? new Date(b.startDate) - new Date(a.startDate)
        : new Date(a.startDate) - new Date(b.startDate)
    );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <SortAndFilter
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        levelFilter={levelFilter}
        onLevelFilterChange={setLevelFilter}
      />
      <div className="hackathon-list">
        {filteredHackathons.map(hackathon => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
    </div>
  );
};

export default HackathonList;
