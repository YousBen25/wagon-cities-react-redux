import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from './city';
import { setCities } from '../actions/index';

class CityList extends React.Component {
  static defaultProps = {
    cities: [{
      name: "Paris",
      address: "16 Villa Gaudelet, 75011 Paris",
      slug: "paris"
    }]
  }

  componentWillMount() {
    this.props.setCities();
  }
  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
