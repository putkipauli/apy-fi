import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Äpy from '../Äpy';
import ÄpyData from '../../../assets/ävyt.json';
import { media } from '../../styles/main';

const InformationContainer = styled.div`
  background-color: white;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  ${media.giant(css`
    padding: 1.5em 3em;
  `)};

  ${media.overdesktop(css`
    padding: 1.5em 3em;
  `)};

  ${media.desktop(css`
    padding: 1em 3em;
  `)};

  ${media.tablet(css`
    padding: 1em 2em;
  `)};

  ${media.phone(css`
    padding: 1em;
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

  ${media.giant(css`
    grid-template-columns: repeat(4, 1fr);
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

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

class ÄpyGrid extends React.Component {
  constructor(props) {
    super(props);
    const { imgGrid, imgCarousel, html } = this.props;
    const äpys = ÄpyData.map(äpy => (
      <Äpy
        imgGrid={imgGrid.filter(x => {
          const last = x.node.childImageSharp.sizes.src.split('/').pop();
          if (last.startsWith(`${äpy.vuosi}`)) {
            return x;
          }
        })}
        imgCarousel={imgCarousel.filter(x => {
          const last = x.node.childImageSharp.sizes.src.split('/').pop();
          if (last.startsWith(`${äpy.vuosi}`)) {
            return x;
          }
        })}
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
  imgGrid: PropTypes.arrayOf(PropTypes.object).isRequired,
  imgCarousel: PropTypes.arrayOf(PropTypes.object).isRequired,
  html: PropTypes.string.isRequired,
};
