import styled from 'styled-components';

interface WrapperProps {
    background: string;
}

export const Wrapper = styled.article<WrapperProps>`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: left -1.25rem bottom;
    background-size: auto 95%;
    background-color: var(--white);
    width: 340px;
    height: 200px;
    display: flex;
    justify-content: flex-end;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

export const Content = styled.div`
    width: 45%;
    padding: 1.5rem 1.25rem 1.5rem 0;
`;

export const Price = styled.p`
    margin-bottom: 1.5rem;
`;

export const Link = styled.a`
    color: var(--orange);
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        font-weight: 600;
    }
    &::after {
        content: '\\2192';
        margin-left: 1.5rem;
        display: inline-block;
    }
`