import styles from './HomePage.module.scss'
import hello from '../../img/hello.png'

const HomePage = () => (
  <main className={styles.container}>
    <h2 className={styles.subTitle}>Welcome</h2>
    <img className={styles.imgHello} src={hello} alt='hello' />
  </main>
)

export default HomePage
