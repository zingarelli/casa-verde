import Product from '../../interfaces/Product';
import Heading from '../Heading';
import { Content, Link, Price, Wrapper } from './styled';

export default function Card({ ...content }: Product) {
    const localeOptions = {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }

    return (
        <Wrapper background={content.img}>
            <Content>
                <Heading mainText={content.name} size='small' />
                <Price>{content.price.toLocaleString('pt-BR', localeOptions)}</Price>
                <Link href='/'>Comprar</Link>
            </Content>
        </Wrapper>
    )
}