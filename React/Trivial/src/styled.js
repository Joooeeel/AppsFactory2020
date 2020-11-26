import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 1024px;
    margin:auto;
    font-family: Arial, Helvetica, sans-serif;
    
    h2{
        text-align: center;
        font-size: 3rem;
        text-shadow: black 2px 2px 2px;
        
    }
`
export const Content = styled.div`
    display: grid;
    grid-template-columns: 50% 50%; 
`

export const QImg = styled.img`
    width:100%;
`

export const QuestionStyle = styled.div`
    padding: 20px;
    display: flex;

    button{
        font-size : 1.5rem;
        padding: 15px;
        margin-right: 10px;
        width:75px;
    }

    p{
        font-weight: bold;
        font-size: 2rem;
    }
`