import styled from 'styled-components';
import background from './assets/background.png';
import mail from './assets/mail.png';

interface FormProp {
    active: boolean;
}

export const Wrapper = styled.main`
    background: url(${background}) right/contain no-repeat;
    height: 90vh;
    max-width: 80%;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Content = styled.section`
    width: 50%;
    margin-bottom: 1.5rem;
`

export const Form = styled.form<FormProp>`
    width: 60%;
    & input, button {
        font-family: var(--text);
        font-size: 1rem;
        font-weight: 400;    
        border: none;
        padding: 1.5rem;
        box-sizing: border-box;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
        cursor: pointer;
    };
    & input {
        width: 65%;
        &::placeholder {
            background: url(${mail}) no-repeat left;
            padding-left: 2.5em;
            color: var(--light-gray);
        }
        &:hover {
            box-shadow: inset 0 0 5px var(--orange);
        }
    }
    & button {
        background-color: var(--orange);
        color: var(--white);
        width: 35%;
        cursor: ${props => props.active ? 'pointer' : 'not-allowed'};
        &:hover {
            background-color: ${props => props.active ? 'var(--orange-hover)' : 'var(--light-gray)'};
        }
    }
`