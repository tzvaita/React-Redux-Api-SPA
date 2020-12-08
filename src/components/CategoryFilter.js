import React from 'react';
// import PropTypes from 'prop-types';
import Constant from '../common/constant';

const CategoryFilter = () => (
  <select>
    <option value="ALL">ALL</option>
    {Constant.categories.map(category => (
      <option value={category} key={category}>{category}</option>
    ))}
  </select>
);

export default CategoryFilter;
