import Heading from '../Heading';
import styles from './AssinaturaNewsletter.module.css';

export default function AssinaturaNewsletter() {
    return(
        <main className={styles.container}>
            <section className={styles.content}>
                <Heading subText='Sua casa com as' mainText='melhores plantas' size='large' />
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            </section>
            <form className={styles.form}>
                <input type="text" placeholder='Insira seu e-mail' className={styles.input} />
                <button className={styles.button}>Assinar newsletter</button>
            </form>
        </main>
    )
}