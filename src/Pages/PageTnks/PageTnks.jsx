import styles from './PageTnks.module.css'

import foto from '../../Images/fotoDeObrigado.png'
import { Link } from 'react-router-dom'

const PageTnks = () => {
  return (
    <div className={styles.container}>
        <div className={styles.tnksMessage}>
            <h1>Obrigado</h1>
            <h2>pela mensagem, entrarei em contato.</h2>
            <div className={styles.image}>
                <img src={foto} alt="Foto Obigado" />
            </div>
        </div>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default PageTnks