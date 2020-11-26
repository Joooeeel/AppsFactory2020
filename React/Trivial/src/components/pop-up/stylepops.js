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
        border: 10px solid black;
        border-radius: 20px;
        background-color:white;
        align-items:center;
        text-align: center;
        padding: 40px;
    }

    button{
        padding: 20px;
    }
`