import Heading from '../Heading';
import { Content, Form, Wrapper } from './styled';

export default function AssinaturaNewsletter() {
    return(
        <Wrapper>
            <Content>
                <Heading subText='Sua casa com as' mainText='melhores plantas' size='large' />
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            </Content>
            <Form>
                <input type="text" placeholder='Insira seu e-mail'/>
                <button>Assinar newsletter</button>
            </Form>
        </Wrapper>
    )
}