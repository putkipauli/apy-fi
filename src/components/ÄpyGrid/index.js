import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Äpy from '../Äpy';
import ÄpyData from '../../../assets/ävyt.json';
import { media } from '../../styles/main';

const InformationContainer = styled.div`
  background-color: white;
  border-radius: 2px;
  padding: 1em;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  ${media.phone(css`
    font-size: 0.8em;
  `)};
`;

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  width: 100%;
  padding-top: 20px;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
    font-size: 20px;
  }

  ${media.giant(css`
    grid-template-columns: repeat(3, 1fr);
    font-size: 20px;
  `)};

  ${media.desktop(css`
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${media.tablet(css`
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${media.phone(css`
    grid-template-columns: repeat(2, 1fr);
  `)};
`;

class ÄpyGrid extends React.Component {
  constructor(props) {
    super(props);
    const { imgData, html } = this.props;
    const äpys = ÄpyData.map(äpy => (
      <Äpy
        imgData={imgData.filter(x =>
          x.node.original.src.startsWith(`/static/${äpy.vuosi}`)
        )}
        äpy={äpy}
        key={äpy.vuosi}
      />
    ));
    this.state = { äpys, html };
  }

  render() {
    const { äpys, html } = this.state;
    return (
      <Fragment>
        <InformationContainer
          id="äpy__info"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Grid id="äpy__grid">{äpys}</Grid>
      </Fragment>
    );
  }
}

export default ÄpyGrid;

ÄpyGrid.propTypes = {
  imgData: PropTypes.arrayOf(PropTypes.object).isRequired,
  html: PropTypes.string.isRequired
};
