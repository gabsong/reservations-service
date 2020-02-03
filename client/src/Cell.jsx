import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from 'date-fns';

class Cell extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.date;
  }

  render () {
    const { dateNum } = this.state;
    return (
    <div>{dateNum}</div>
    );
  }
}

Cell.propTypes = {
  date: PropTypes.object,
};

Cell.defaultProps = {
  date: {},
};

export default Cell;
