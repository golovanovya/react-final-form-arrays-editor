import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  pointer-events: ${p => (p.hasText ? 'auto' : 'none')};

  .text-enter {
    opacity: 0;
    transform: translate(0, -10px);
  }
  .text-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: ${p => p.timeout}ms ease-in;
    transition-property: opacity, transform;
  }
  .text-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .text-exit-active {
    opacity: 0;
    transform: translate(0, -10px);
    transition: ${p => p.timeout}ms ease-in;
    transition-property: opacity, transform;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  ${p => p.theme.text.p6};
  color: ${p => p.theme.color.secondary2};
`;
