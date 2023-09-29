import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;

  p {
    display: flex;
    gap: .5rem;

    padding-left: 1rem;

    a {
      @media(min-width: 768px) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`; 