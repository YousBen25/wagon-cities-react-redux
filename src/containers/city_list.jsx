import React from 'react';
import City from './city';

class CityList extends React.Component {
  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

export default CityList;
