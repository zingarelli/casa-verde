import styles from './Heading.module.css';

interface Props {
    subText: string;
    mainText: string;
    size?: 'medium' | 'large'
}

export default function Heading({ subText, mainText, size = 'medium'}: Props){
    return (
        <div className={styles.heading}>
            <h3 className={styles.subTitle}>{subText}</h3>
            <h2 className={`${styles.mainTitle} ${styles[size]}`}>{mainText}</h2>
        </div>
    )
}