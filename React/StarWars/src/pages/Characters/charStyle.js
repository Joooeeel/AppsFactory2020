import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    font-family:Arial, Helvetica, sans-serif;

    h1{
        font-size: 3rem;
        letter-spacing: 3px;
    }

    p{
        font-weight:bold;
        font-size:1.5rem;
        letter-spacing: 3px;
    }
`

export const Films = styled.div`
    width: 70%;
    margin-left: 40px;
    margin-bottom: 200px;

    h2{
        font-size: 2rem;
    }

    ul{
        font-size: 1.5rem;
    }
`

export const Img = styled.img`
    width:100%;
`