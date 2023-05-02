import { Wrapper } from './styled';

interface Props {
    subText: string;
    mainText: string;
    size?: 'medium' | 'large'
}

// renders a main title and a sub title above it. Optionally change main title's size to "large"
export default function Heading({ subText, mainText, size = 'medium'}: Props){
    return (
        <Wrapper size={size}>
            <h3>{subText}</h3>
            <h2>{mainText}</h2>
        </Wrapper>
    )
}