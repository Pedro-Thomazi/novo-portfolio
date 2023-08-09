// import { Link } from 'react-router-dom'
import styles from './Header.module.css'

import myPhoto from '../../Images/minhaFoto.png'

import { useState } from 'react'


const Header = () => {
  const [isActive, setIsActive] = useState('')
  // const [menuHamb, setMenuHamb] = useState('')

  const showMenu = () => {
    if (isActive === '') {
      setIsActive(styles.openMenu)
    }
    else {
      setIsActive('')
    }
  }

  return (
    <header id='top' className={styles.header}>
      <nav className={styles.navbar}>
        <span className={styles.nameAndIcon}>
          <span className={styles.myEngineIcon}>
            <i className='bx bx-code-alt'></i>
          </span>
          <span>
            <h1>Pedro</h1>
            <h2>T.Viannini</h2>
          </span>
        </span>
        <input className={styles.inputBtnHamb} type="checkbox" id="toggle" />
        <label className={styles.btnHamb} htmlFor="toggle">
          <div className={styles.hamb1}></div>
          <div className={styles.hamb2}></div>
          <div className={styles.hamb3}></div>
        </label>
        <ul className={styles.listLinks}>
          <li>
            <a href='#top'><i className='bx bxs-home'></i><p>Início</p></a>
          </li>
          <li className={styles.liPlus}>
            <div className={styles.listWithMenu} onClick={showMenu}>
              <i className='bx bxs-user-rectangle'></i>
              <span>Sobre</span>
              <i className={`bx bxs-chevron-down arrow ${styles.arrow}`}></i>
            </div>
            <ul className={`${styles.sub_menu} ${isActive}`}>
              <li><a href="#about"><i className="bi bi-person-lines-fill"></i>Sobre mim</a></li>
              <li><a href="#myKnowledge"><i className="bi bi-person-vcard"></i>Conhecimentos</a></li>
              <li><a href="#projects"><i className="bi bi-tools"></i>Meus projetos</a></li>
            </ul>
          </li>
          <li>
            <a href='#contacts'><i className='bx bxs-phone' ></i><p>Contatos</p></a>
          </li>
        </ul>
      </nav>
      <div className={styles.me}>
        <h2>Eu sou o</h2>
        <h1>Pedro Thomazi Viannini</h1>
        <img src={myPhoto} alt="Minha Foto" />
        <h2>Desenvolvedor Front-End</h2>
      </div>
    </header>
  )
}

export default Header

// <!-- Icons https://boxicons.com/usage -->