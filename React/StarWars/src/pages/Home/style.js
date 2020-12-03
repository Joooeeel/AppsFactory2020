import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width:100%;
    overflow:hidden;

    div{
        width:98%;
        margin-right:0px;
    }
    
`

export const List = styled.div`
    
    
    
    ul{
        list-style: none;
        display: grid;
        text-align: center;
        grid-template-columns: repeat(4,1fr);
        column-gap: 5px;
        row-gap: 10px;
        padding:0px;
    }

    a{
        display: block;
        text-decoration: none;
        font-size: 2rem;
        text-align:center;  
        color: black;      
    }

    
`

export const LinkPage = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    color:black;
    margin-right: 10px;
`