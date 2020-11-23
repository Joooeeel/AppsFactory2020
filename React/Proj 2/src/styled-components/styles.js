import styled from 'styled-components';

export const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${({ color }) => color ? 'green' : 'red'};
`