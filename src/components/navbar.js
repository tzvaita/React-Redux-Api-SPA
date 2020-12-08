import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';

const NavBar = ({ handleFilterChange }) => (
  <header className="bg-white py-2">
    <nav className="container d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </div>
    </nav>
  </header>
);

NavBar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default NavBar;
