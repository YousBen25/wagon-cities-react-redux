import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class ActiveCity extends React.Component {
  render() {
    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
    if (!this.props.activeCity.address) {
      // eslint-disable-next-line react/jsx-wrap-multilines
      return (
        <div>
          <h2>Select a city ...</h2>
        </div>
      );
    }
    return (
      <div className="active-city">
        <div>
          <h2>{this.props.activeCity.name}</h2>
          <p>{this.props.activeCity.address}</p>
          <img src={url} width="100%" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}
export default connect(mapStateToProps)(ActiveCity);
