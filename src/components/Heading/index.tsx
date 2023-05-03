import { Wrapper } from './styled';

interface Props {
    subText?: string;
    mainText: string;
    size?: 'small' | 'medium' | 'large'
}

// renders a main title and a sub title above it (optional). Optionally change main title's size to "large" or "small"
export default function Heading({ subText, mainText, size = 'medium'}: Props){
    return (
        <Wrapper size={size}>
            {subText && <h3>{subText}</h3>}
            <h2>{mainText}</h2>
        </Wrapper>
    )
}