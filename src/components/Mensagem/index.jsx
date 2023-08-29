import styles from './styles.module.css'

export default function Cabecario() {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.fundo}>
                    <div className={styles.textTitulo}>
                        <h1>Obrigado!</h1>

                    </div>
                    <div className={styles.textMensagem}>
                        <p>Sua opinião é muito importante para melhorarmos a qualidade dos nossos conteúdos!</p>
                    </div>
                </div>
            </header>
        </>
    )
}