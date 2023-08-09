import { Link } from 'react-router-dom'
import styles from './ContactMe.module.css'

const ContactMe = () => {
    return (
        <div className={styles.containerForm}>
            <form action="https://formsubmit.co/e06929d63f8bbc97446d38d92597e1cc"
                method="POST">
                <h2>Envie um E-mail para mim com esse <span>Formulário</span></h2>
                <div className={styles.inputName}>
                    <input type="text" name='name' required />
                    <label htmlFor="">Nome</label>
                </div>
                <div className={styles.inputEmail}>
                    <input type="email" name='email' required />
                    <label htmlFor="">E-mail</label>
                </div>
                <div className={styles.inputMessage}>
                    <textarea name='message' cols="30" rows="10" placeholder='Digite sua mensagem'></textarea>
                </div>
                <input className={styles.btnSubmit} type="submit" value="Enviar" />
                <input type="hidden" name="_next" value="https://novo-portfolio-three.vercel.app/page-tnks"></input>
                <span className={styles.repositoryAndLinkedin}>
                    <p>Acesse meu Repositório e meu LinkedIn</p>
                    <span className={styles.ambos}>
                        <Link to='https://github.com/pedro-thomazi' className={styles.my_github} target='_blank'>
                            <i className='bx bxl-github' ></i>
                        </Link>
                        <Link to='https://www.linkedin.com/in/pedro-thomazi-viannini/' className={styles.my_linkedin} target='_blank'>
                            <i className='bx bxl-linkedin' ></i>
                        </Link>
                    </span>
                </span>
            </form>
            <Link className={styles.btnBack} to={'/'}>Portfólio</Link>
        </div>
    )
}

export default ContactMe
