import Projects from '../Projects/Projects'
import styles from './Main.module.css'

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <div id='about' className={styles.aboutMe}>
        <div className={styles.text}>
          <h2 className={styles.aboutTitle}><span>Quem</span> sou eu?</h2>
          <p>Me chamo Pedro, estudo programação desde 2019, aonde começei por Python, mas depois de um tempo acabei me identificando melhor com JavaScript, onde é meu maior foco hoje. Estou constantemente fazendo cursos tanto pagos quanto grátis pela internet, sempre praticando logo em seguida fazendo sites próprio, ou aprendendo novas técnicas.</p>
          <p>Escolhi o caminho do Front-end, porquê me chamou mais atenção, mas estudo Back-end tambêm, até porquê <span className={styles.destaque}>quem faz barba, tem que fazer bigode tambêm</span>.</p>
        </div>

        <div id='myKnowledge' className={styles.myKnowledge}>
          <h2>Alguns de meu <span>conhecimentos</span>.</h2>
          <ul>
            <li className={styles.html}>
              <i className='bx bxl-html5' ></i>
              <span>HTML5</span>
              <p>Grande parte do meu conhecimento sobre HTML veio das aulas grátis do professor Gustavo Guanabar, do canal Curso em Vídeo. Completei 3 módulos de 5. Mas tambêm aprendi bastante com outros cursos e vídeos.</p>
            </li>
            <li className={styles.css}>
              <i className='bx bxl-css3' ></i>
              <span>CSS3</span><p>Começei no CSS com os cursos do professor Gustavo Guanabar e ao longo do tempo fui aprendendo mais e mais com outros cursos.</p>
            </li>
            <li className={styles.javascript}>
              <i className='bx bxl-javascript' ></i>
              <span>JavaScript</span><p>Começei no JavaScript com um curso básico do professor Gustavo Guanabar. Fiquei animado para aprender mais sobre essa linguagem, então comprei um curso do professor Leonardo Moura Leitão da Cod3r na Udemy.</p>
            </li>
            <li className={styles.react}>
              <i className='bx bxl-react' ></i>
              <span>React.js</span><p>Meus conhecimentos iniciais no React.js vieram do curso da Cod3r, mas não havia compreendido muito bem sobre esse Framework, então comprei um curso do professor Matheus Battisti, na Udemy.</p>
            </li>
            <li className={styles.typescript}>
              <i className='bx bxl-typescript' ></i>
              <span>TypeScript</span><p>O TypeScript nunca tinha compreendido muito bem o porquê usar, então comprei o curso do professor Matheus Battisti, na Udemy.</p>
            </li>
            <li className={styles.react}>
              <i className='bx bxl-react' ></i>
              <span>Next.js</span><p>Next.js fiz um curos gratuito no Youtube, do professor Matheus Battisti.</p>
            </li>
            <li className={styles.sass_scss}>
              <i className='bx bxl-sass'></i>
              <span>SASS/SCSS</span><p>Começei a aprender SASS e SCSS com um curso da Udemy, do professor Matheus Battisti</p>
            </li>
            <li className={styles.python}>
              <i className='bx bxl-python' ></i>
              <span>Python</span><p>Python foi minha primeira linguagem de programação, começei com os cursos gratuitos do Curso em Vídeo, mas os cursos não tiveram continuidade da parte do canal. Fiquei cerca de um ano e meio sem ter contato com a linguagem, somente no começo de 2023 voltei a estudar-lá com o um curso do professor Luiz Otávio Miranda, na Udemy.</p>
            </li>
            <li className={styles.excel}>
              <i className='bx bxs-spreadsheet' ></i>
              <span>Excel</span><p>Excel eu já havia feito um trabalho de escola com ele sem muita experiência, então resolvi aprender um pouco mais sobre, fazendo um curos do Curso em Vídeo.</p>
            </li>
          </ul>
        </div>
      </div>
      <Projects />
    </main>
  )
}

export default Main