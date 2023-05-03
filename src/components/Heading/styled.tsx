import styled from 'styled-components';

interface Props {
    size?: 'small' | 'medium' | 'large'
}

export const Wrapper = styled.div<Props>`
    margin-bottom: ${props => props.size==='small' ? '.5rem' : '1.5rem'};
    & h2 {
        color: var(--black);
        font-family: var(--headings);
        font-weight: 900;
        ${props => {
            switch (props.size){
                case 'large':
                    return `
                        font-size: 82px;
                        line-height: 95px;
                    `;
                case 'medium':
                    return `
                        font-size: 42px;
                        line-height: 48px;
                    `
                case 'small': 
                    return `
                        font-size: 32px;
                        line-height: 37px;
                    `
            }
        }}
    };
    & h3 {
        font-size: 22px;
        line-height: 27px;
    }
`;