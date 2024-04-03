import React, { useState } from 'react';

const Filter = ({ domains, genders, availabilities, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    domain: '',
    gender: '',
    availability: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedFilters({ ...selectedFilters, [name]: value });
    onFilterChange({ ...selectedFilters, [name]: value });
  };

  return (
    <div className="filter">
      <select name="domain" value={selectedFilters.domain} onChange={handleChange}>
        <option value="">All Domains</option>
        {domains.map((domain) => (
          <option key={domain} value={domain}>{domain}</option>
        ))}
      </select>
      <select name="gender" value={selectedFilters.gender} onChange={handleChange}>
        <option value="">All Genders</option>
        {genders.map((gender) => (
          <option key={gender} value={gender}>{gender}</option>
        ))}
      </select>
      <select name="availability" value={selectedFilters.availability} onChange={handleChange}>
        <option value="">All Availabilities</option>
        {availabilities.map((availability) => (
          <option key={availability} value={availability}>{availability}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
