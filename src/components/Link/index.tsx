import styles from './Link.module.css';

interface Props {
    value: string;
    to: string;
    sep?: string;
}

// renders a link and an optional separator (to be displayed between links)
export default function Link({ value, sep, to}: Props) {
    return (
        <>
            <a className={styles.link} href={to}>{value}</a>
            {sep && <span className={styles.separator}>{sep}</span>}
        </>
    )
}