import React from 'react';
import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Wrapper, Text } from './styled';

const timeout = 200;

const Error = ({ text, className }) => (
  <Wrapper hasText={!!text} className={className} timeout={timeout}>
    <TransitionGroup>
      {text && (
        <CSSTransition key={text} timeout={timeout} classNames='text'>
          <Text>{text}</Text>
        </CSSTransition>
      )}
    </TransitionGroup>
  </Wrapper>
);

Error.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

Error.defaultProps = {};

export default Error;
