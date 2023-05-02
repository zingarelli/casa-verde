import { Anchor, Separator } from './styled';

interface Props {
    value: string;
    to: string;
    sep?: string;
}

// renders a link and an optional separator (to be displayed between links)
export default function Link({ value, sep, to}: Props) {
    return (
        <>
            <Anchor href={to}>{value}</Anchor>
            {sep && <Separator>{sep}</Separator>}
        </>
    )
}