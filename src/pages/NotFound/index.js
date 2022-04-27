import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  })

  return (
    <main className={styles.container}>
      <h2 className={styles.subTitle}>The page not found</h2>
      <Link to='/'>Home</Link>
    </main>
  )
}

export default NotFound
