import styled from 'styled-components';

interface Props {
    size?: 'medium' | 'large'
}

export const Wrapper = styled.div<Props>`
    margin-bottom: 1.5rem;
    & h2 {
        color: var(--black);
        font-family: var(--headings);
        font-weight: 900;
        ${props => {
            if (props.size === 'large') return `
                font-size: 82px;
                line-height: 95px;
            ` 
            return `
                font-size: 42px;
                line-height: 48px;
            `
        }}
    };
    & h3 {
        font-size: 22px;
        line-height: 27px;
    }
`;