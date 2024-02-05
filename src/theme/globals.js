import { createGlobalStyle } from 'styled-components';

import './fonts/index.css';
import './vendor/tippy.css';
import toastify from './vendor/toastify';
// Add global focus outline here later

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: none;
  }

  *:focus {
    outline: none;
  }

  ${toastify}

  body {
    ${p => p.theme.text.primaryFont};

    background-color: ${p => p.theme.color.primary4};

    &.modal_opened {
      overflow: hidden;
    }
  }

  body.using-mouse &:focus {
    box-shadow: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  ol {
    padding-left: 20px;
  }

  keygen,
  button {
    ${p => p.theme.text.primaryFont}
  }

  a {
    text-decoration: none;
  }
  
  .tox-tinymce {
    border-radius: 4px !important;
    transform: translateY(-8px);
    z-index: 101;
  }
`;
