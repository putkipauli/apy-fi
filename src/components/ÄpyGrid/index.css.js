import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../../styles/main';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding-top: 20px;

  ${media.giant(css`
    margin: 0 25% auto 25%;
    grid-template-columns: repeat(5, 1fr);
  `)};

  ${media.overdesktop(css`
    margin: 0 20% auto 20%;
    grid-template-columns: repeat(4 1fr);
  `)};

  ${media.desktop(css`
    margin: 0 15% auto 15%;
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${media.tablet(css`
    margin: 0 10% auto 10%;
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${media.phone(css`
    margin: 0 2% auto 2%;
    grid-template-columns: repeat(3, 1fr);
  `)};
`;
