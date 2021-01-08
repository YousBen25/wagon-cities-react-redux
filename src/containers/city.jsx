import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions/index';

class City extends React.Component {
  handleClick = () => {
    // REDUX ACTION
    this.props.setActiveCity(this.props.city);
  }
  render() {
    let classes = "city";

    if (this.props.city === this.props.activeCity) {
      classes += " selected";
    }
    return (
      <div className={classes} onClick={this.handleClick}>
        <p><strong>{this.props.city.name}</strong></p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(City);
