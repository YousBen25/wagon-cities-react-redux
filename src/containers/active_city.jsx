import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class ActiveCity extends React.Component {
  render() {
    let city = null;
    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
    if (this.props.activeCity) {
      // eslint-disable-next-line react/jsx-wrap-multilines
      city = <div>
        <h2>{this.props.activeCity.name}</h2>
        <p>{this.props.activeCity.address}</p>
        <img src={url} alt="" />
      </div>;
    }
    return (
      <div className="active-city">
        {city}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}
export default connect(mapStateToProps)(ActiveCity);
