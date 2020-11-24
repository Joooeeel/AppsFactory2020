import styled from 'styled-components';


export const Pops = styled.div`
    background: rgba(0,0,0,0.6);
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    position:fixed;
    top:0;
    left:0;

    div{
        background-color: grey;
        
        width: 600px;
        height:600px;
    }
`