import styled from 'styled-components';

export const Wrapper = styled.section`
    max-width: 90%;
    min-height: 70vh;
    margin: auto;
    padding: 3rem 0;
`

export const Title = styled.div`
    text-align: center;
`

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1.8rem;
`

export const Options = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1.5rem auto;
    & label {
        margin-right: .5rem;
    }
    & select, input, button {
        font-family: var(--text);
        font-size: 1rem;
        font-weight: 400;    
        padding: 1rem;
        box-sizing: border-box;        
    }
    & select, input {
        border: 1px solid var(--white);
        &:hover {
            border: 1px solid var(--orange);
        }
    }
    & button {
        border: 1px solid var(--orange);
        background-color: var(--orange);
        color: var(--white);
        &:hover {
            background-color: var(--orange-hover)
        }
    }
`

export const Empty = styled.p`
    padding: 4rem 0 2rem;
`