import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer id='contacts' className={styles.footer}>
        <div className={styles.social}>
        <ul>
          <li>
            <Link to='https://github.com/pedro-thomazi' className={styles.my_github} target='_blank'>
            <i className='bx bxl-github' ></i>
            <p>github.com/pedro-thomazi</p>
            </Link>
          </li>
          <li>
            <Link to='https://www.linkedin.com/in/pedro-thomazi-viannini/' className={styles.my_linkedin} target='_blank'>
            <i className='bx bxl-linkedin-square' ></i>
            <p>linkedin.com/in/pedro-thomazi-viannini/</p>
            </Link>
          </li>
        </ul>
        </div>
        <h2>Entre em <span>contato</span> comigo...</h2>
        <Link className={styles.btnForm} to={'/contact'}>Por Aqui</Link>
        <p className={styles.parag}>Você será direcionado para um pequeno formulário.</p>
    </footer>
  )
}

export default Footer