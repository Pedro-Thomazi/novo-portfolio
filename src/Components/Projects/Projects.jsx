import { Link } from 'react-router-dom'
import styles from './Projects.module.css'


const Projects = () => {
    return (
        <section id='projects' className={styles.containerProjects}>
            <div>
                <h2>Alguns de meus <span>projetos</span>.</h2>
                <h3><i className='bx bx-navigation' ></i>Passe o mouse por cima ou clique no projeto para ver os detalhes.</h3>
                <ul className={styles.projectsList}>
                    <li className={styles.projeto1}>
                        <h3>Página de compra</h3>
                        <p>Página para comprar um cabeçote Marshall JCM800. Responsiva. Inspirada na página do Mercado Livre.</p>
                        <Link to={'https://page-marshall-jcm800.vercel.app/'} target='blank'>Ver mais...</Link>
                    </li>
                    <li className={styles.projeto2}>
                        <h3>Lista de Compras</h3>
                        <p>Projeto sem Back-end, mas é possivel adicionar e remover itens de uma lista. Ao apertar F5 zera a lista. Responsiva.</p>
                        <Link to={'https://projeto-lista-de-compras.vercel.app/'} target='blank'>Ver mais...</Link>
                    </li>
                    <li className={styles.projeto3}>
                        <h3>Guitar Store</h3>
                        <p>Página de compra de guitarras e violões. Responsiva</p>
                        <Link to={'https://guitar-store-peach.vercel.app/'} target='blank'>Ver mais...</Link>
                    </li>
                    <li className={styles.projeto4}>
                        <h3>Minha réplica do Youtube</h3>
                        <p>Réplica quase 100% do Youtube, com algumas mudanças. Responsiva.</p>
                        <Link to={'https://replica-do-youtube.vercel.app/'} target='blank'>Ver mais...</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Projects