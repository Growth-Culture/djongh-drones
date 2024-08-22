import styled from 'styled-components'

export const Button =  styled.button`
    display: flex;
    align-items: center;

    height: 3.4rem;
    border-radius: 2.5rem;
    background: #FFF;
    color: #000000;

    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;

    padding: .5rem 3.2rem;

    cursor: pointer;
    border: 1px solid transparent; 

    transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease; 

    &:hover {
        background-color: #fff;
        color: #FD7400;
    }

    &:disabled {
        opacity: 0.6;
    }

`