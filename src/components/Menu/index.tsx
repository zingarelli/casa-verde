import Link from '../Link';
import logo from './logo.png';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo da Casa Verde" />
            <nav className={styles.links}>
                <Link to='#' value='Como fazer' sep='/' />
                <Link to='#' value='Ofertas' sep='/' />
                <Link to='#' value='Depoimentos' sep='/' />
                <Link to='#' value='Vídeos' sep='/' />
                <Link to='#' value='Meu carrinho' />
            </nav>
        </header>
    )
}