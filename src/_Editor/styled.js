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
  ${p => p.theme.text.p6};
`;

export const Label = styled.label`
  position: absolute;
  top: 13px;
  left: 13px;
  max-width: calc(100% - 21px);
  ${p => p.theme.text.p2};
  ${p => p.theme.text.secondaryFont};
  color: ${p => p.theme.color.dark2};
  transition: 0.2s ease;
  pointer-events: none;
  background: ${p => p.theme.color.light};
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
    border: 1px solid ${p => p.theme.color.dark2};
    border-radius: 4px;
    padding: 15px 10px;
    min-height: 47px;
    box-sizing: border-box;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: ${p => p.theme.color.primary2};
      box-shadow: 0 0 0 1px ${p => p.theme.color.primary2};

      & ~ ${Label} {
        color: ${p => p.theme.color.primary2};
      }
    }

    &:focus {
      border-color: ${p => p.theme.color.primary2};
      box-shadow: 0 0 0 1px ${p => p.theme.color.primary2};

      & ~ ${Label} {
        ${activeLabel};
        color: ${p => p.theme.color.primary2};
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
