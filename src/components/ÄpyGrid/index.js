import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from './index.css';

class ÄpyGrid extends React.Component {
  render() {
    const { children } = this.props;
    return <GridContainer>{children}</GridContainer>;
  }
}

export default ÄpyGrid;

ÄpyGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
