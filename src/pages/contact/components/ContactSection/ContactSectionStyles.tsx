import styled from  'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 144rem;
    height: 53rem;
    display: flex;
    flex-direction: row;
    padding: 8.4rem 9.4rem;
    justify-content: space-between;

`

export const ContactInfo = styled.div`
    width: 50%;
    display: flex;
    flex: 1;
    align-items: left;
    flex-direction: column;
    justify-content: space-between;

`

export const ContactTitle  = styled.h2`
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 500;
    padding-right: 15rem;

`

export const ContactPhone = styled.div`
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 4.4rem;

    
`

export const ContactEmail = styled.div`
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 4.4rem;   
    
`

export const Form = styled.form`
    width: 50%;
    max-width: 59.4rem;
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: left;
    padding: 0 2.4rem;
    font-size: 1.6rem;
    gap: 2.4rem;
    
`
export const Label = styled.label`
    padding-bottom: 0.8rem;
    
`

export const Input = styled.input`
    height: 4rem; 
    font-size: 1.6rem;
    padding: 0;
    border: none;
    border-bottom: 0.05rem solid #000;
    outline: none;
    padding-bottom: 2.4rem;
    
`
export const Textarea = styled.textarea`
    height: 8rem;
    font-size: 1.6rem;
    padding: 0; 
    border: none; 
    border-bottom: 0.05rem solid #000; 
    outline: none; 
    padding-bottom: 2.4rem;


`