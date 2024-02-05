import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import variables from './variables';

const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={variables}>{children}</ThemeProvider>
);

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { variables, CustomThemeProvider as ThemeProvider };
