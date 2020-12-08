import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchData, categoryFilter } from '../actions';
import NavBar from '../components/navbar';

const PokeList = ({
  userData, fetchData, categoryFilter, filter,
}) => {
  const handleFilterChange = e => categoryFilter(e.target.value);
  let list;
  useEffect(() => {
    fetchData();
  }, []);
  if (userData.loading) {
    return <p>Loading...</p>;
  }

  if (!_.isEmpty(userData.ourData)) {
    (filter === 'ALL') ? (list = userData.ourData.map(pok => (
      <div key={userData.ourData.indexOf(pok)} className="singleImg card col-lg-3 col-md-4 col-sm-6">
        <Link to={`/pokemon/${pok.name}`}>
          <img className="card-img-top" src={`https://pokeres.bastionbot.org/images/pokemon/${pok.id}.png`} alt="POKEMON" />
          <div className="card-body">
            <h5 className="card-title pokTitle">{pok.name}</h5>
          </div>
        </Link>
        <div className="types">
          <h5 className="pokTitle">Type</h5>
          {pok.types.map(type => (
            <div className="typetxt" key={pok.types.indexOf(type)}>{type.type.name}</div>))}
        </div>
      </div>
    ))) : (list = userData.ourData.filter(pok => pok.category === filter).map(pok => pok => (
      <div key={userData.ourData.indexOf(pok)} className="singleImg card col-lg-3 col-md-4 col-sm-6">
        <Link to={`/pokemon/${pok.name}`}>
          <img className="card-img-top" src={`https://pokeres.bastionbot.org/images/pokemon/${pok.id}.png`} alt="POKEMON" />
          <div className="card-body">
            <h5 className="card-title pokTitle">{pok.name}</h5>
          </div>
        </Link>
        <div className="types">
          <h5 className="pokTitle">Type</h5>
          {pok.types.map(type => (
            <div className="typetxt" key={pok.types.indexOf(type)}>{type.type.name}</div>))}
        </div>
      </div>)));

    return (
      <div className="container-fluid">
        <NavBar handleFilterChange={handleFilterChange} />
        <div className="row">
          {list}
        </div>
      </div>
    );
  }

  if (userData.error !== '') {
    return <p>{userData.error}</p>;
  }

  return <p> Unable to fetch data...</p>;
};

PokeList.propTypes = {
  userData: PropTypes.shape({
    loading: PropTypes.bool,
    ourData: PropTypes.arrayOf(PropTypes.object) || null,
    error: PropTypes.string,
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
  categoryFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userData: state.pokemon,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  categoryFilter: category => dispatch(categoryFilter(category)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
