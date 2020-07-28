import styled from 'styled-components';


export const FooterBase = styled.footer`
    --border-top-color: #49f295;
  background: var(--black);
  border-top: 2px solid var(--border-top-color);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
