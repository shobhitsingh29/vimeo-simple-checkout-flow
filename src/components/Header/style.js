import styled from 'styled-components';

export const StyledThemeButton = styled.button`
   background-color: ${props => props.color};
    border-radius: 50%;
    width: 1em;
    height: 1em;
    border: 0;
    margin-right: 1%;
`;

export const StyledHeader = styled.header`
  display: flex;
      padding: .5em 0;
    justify-content: flex-end;
    border-bottom: 1px solid;
`;
