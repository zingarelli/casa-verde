import { useState } from 'react';
import Heading from '../Heading';
import { Content, Form, Wrapper } from './styled';

export default function AssinaturaNewsletter() {
    const [active, setActive] = useState(false);
    const [email, setEmail] = useState('');

    const validaEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if(e.target.validity.valid) {
            setActive(true);
        }
        else {
            setActive(false);
        }
    }

    const enviaFormulario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`)
    }

    return(
        <Wrapper>
            <Content>
                <Heading subText='Sua casa com as' mainText='melhores plantas' size='large' />
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            </Content>
            <Form active={active} onSubmit={enviaFormulario}>
                <input 
                    required 
                    type="email" 
                    placeholder='Insira seu e-mail' 
                    onChange={validaEmail}
                    value={email}
                />
                <button className={active ? '' : 'disable'}>Assinar newsletter</button>
            </Form>
        </Wrapper>
    )
}