import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const defineNavLinkStyle = ({ isActive }) => ({
  color: isActive ? 'rgb(64, 227, 233)' : 'rgb(249, 252, 252)'
})

const Header = () => (
  <header className={styles.mainHeader}>
    <nav className={`${styles.navHeader} ${styles.container}`}>
      <NavLink to='/'>
        <h1 className={styles.mainTitle}>My Homeworks</h1>
      </NavLink>
      <div className={styles.wrapperLinnk}>
        <NavLink style={defineNavLinkStyle} to='/components'>
          Components
        </NavLink>
        <NavLink style={defineNavLinkStyle} to='/contacts'>
          Contacts
        </NavLink>
      </div>
    </nav>
  </header>
)

export default Header
