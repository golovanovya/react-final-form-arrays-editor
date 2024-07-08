import styled, { css } from 'styled-components';

import _Error from '../Error/index';

export const Error = styled(_Error)`
  height: 16px;
  width: 100%;
  padding: 0 13px;

  > div {
    position: relative;
  }
`;

const noBorderStyle = css`
  border: none !important;
  box-shadow: none !important;
`;

const activeLabel = css`
  top: -7px;
  left: 5px;
  padding: 0 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;

export const Label = styled.label`
  position: absolute;
  top: 13px;
  left: 13px;
  max-width: calc(100% - 21px);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: 'Open Sans', sans-serif;
  color: '#98A0A9';
  transition: 0.2s ease;
  pointer-events: none;
  background: '#fff';
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${p => (p.error ? `color: ${p.theme.color.secondary2}` : '')} !important;

  ${p => (p.hasValue ? activeLabel : '')};
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .mce-content-body {
    border: 1px solid '#98A0A9';
    border-radius: 4px;
    padding: 15px 10px;
    min-height: 47px;
    box-sizing: border-box;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: '#4663AB';
      box-shadow: 0 0 0 1px '#4663AB';

      & ~ ${Label} {
        color: '#4663AB';
      }
    }

    &:focus {
      border-color: '#4663AB';
      box-shadow: 0 0 0 1px '#4663AB';

      & ~ ${Label} {
        ${activeLabel};
        color: '#4663AB';
      }
    }

    ${p =>
      p.error &&
      `border-color: ${p.theme.color.secondary2} !important; box-shadow: 0 0 0 1px ${p.theme.color.primary2} !important;`};

    ${p => p.noBorder && noBorderStyle};

    img {
      max-width: 100%;
      object-fit: contain;
      height: auto;
      width: auto;
      margin: auto;
    }
  }
`;
