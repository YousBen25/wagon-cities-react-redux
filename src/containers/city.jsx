import React from 'react';

class City extends React.Component {
  render() {
    return (
      <div className="city">
        <p><strong>{this.props.city.name}</strong></p>
      </div>
    );
  }
}

export default City;
