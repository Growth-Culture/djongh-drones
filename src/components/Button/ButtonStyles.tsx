import styled from 'styled-components'

export const Container =  styled.button`
    width: 100%;
    display: flex;
    align-items: center;

    height: 3.4rem;
    border-radius: 2.5rem;
    background: #FD7400;
    color: #FFFFFF;

    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;

    padding-left: 2rem;

    cursor: pointer;
    border: 1px solid transparent; 

    transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease; 

    &:hover {
        background-color: transparent;
        border: 1px solid #FD7400; 
        color: #FD7400;
    }

    &:disabled {
        opacity: 0.6;
    }

`