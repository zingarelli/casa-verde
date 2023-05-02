import Link from '../Link';
import logo from './assets/logo.png';
import { Header } from './styled';

export default function Menu() {
    return (
        <Header>
            <img src={logo} alt="logo da Casa Verde" />
            <nav>
                <Link to='#' value='Como fazer' sep='/' />
                <Link to='#' value='Ofertas' sep='/' />
                <Link to='#' value='Depoimentos' sep='/' />
                <Link to='#' value='Vídeos' sep='/' />
                <Link to='#' value='Meu carrinho' />
            </nav>
        </Header>
    )
}