import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/action/useraction';
import UserCard from '../components/user-card';
import Pagination from '../components/pagination';
import SearchBar from '../components/searchbar';
import Filter from '../components/filter';
import Team from '../components/team';

const HomePage = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    domain: '',
    gender: '',
    availability: ''
  });
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    const filtered = users.filter((user) => {
      const isDomainMatch = !filters.domain || user.domain === filters.domain;
      const isGenderMatch = !filters.gender || user.gender === filters.gender;
      const isAvailabilityMatch = !filters.availability || user.availability === filters.availability;
      return isDomainMatch && isGenderMatch && isAvailabilityMatch;
    });
    setFilteredUsers(filtered);
  }, [filters, users]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredUsers(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const addToTeam = (user) => {
    if (!selectedUsers.some((u) => u.id === user.id)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  return (
    <div className="homepage">
      <SearchBar onSearch={handleSearch} />
      <Filter
        domains={['Domain1', 'Domain2', 'Domain3']} // Replace with actual domain data
        genders={['Male', 'Female']} // Replace with actual gender data
        availabilities={['Available', 'Unavailable']} // Replace with actual availability data
        onFilterChange={handleFilterChange}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <div className="user-cards">
            {filteredUsers
              .slice((currentPage - 1) * 20, currentPage * 20)
              .map((user) => (
                <UserCard key={user.id} user={user} onClick={() => addToTeam(user)} />
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredUsers.length / 20)}
            onPageChange={setCurrentPage}
          />
          <Team selectedUsers={selectedUsers} />
        </>
      )}
    </div>
  );
};

export default HomePage;
