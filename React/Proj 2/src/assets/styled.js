import styled, { css } from 'styled-components';
import arrow from './img/flecha.png';

export const Top = styled.div`
    display: flex;
`
const ArrowBtn = css`
    cursor: pointer;
    background-image: url(${arrow});
    background-size: 100% 100%;
    width: 35px; height: 35px;
`

export const LeftBtn = styled.div`
    ${ArrowBtn}
    margin-right: 15px;
`

export const RightBtn = styled.div`
    ${ArrowBtn}
    margin-left: 15px;
    transform: rotate(180deg);
`

export const Title = styled.h2`
    margin: 5px;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 98%;
    margin:auto;
`

export const ImageMain = styled.img`
    width: 100%;
`

export const Img = styled.img`
width: 100%;
${({ active }) => active ? 'border:5px solid red; z-index:10' : 'border:5px solid transparent'};
border-radius: 10px;
cursor: pointer;
`