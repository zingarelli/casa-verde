import styled from 'styled-components';

export const Anchor = styled.a`
    color: var(--black);
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

export const Separator = styled.span`
    color: var(--black);
    margin: 0 .8rem;
`