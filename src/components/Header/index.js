import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const defineNavLinkStyle = ({ isActive }) => ({
  color: isActive ? 'red' : 'blue'
})

const Header = () => (
  <header>
    <h1>Main Page</h1>
    <nav>
      <NavLink style={defineNavLinkStyle} to='/'>
        Home
      </NavLink>
      <NavLink style={defineNavLinkStyle} to='/components'>
        Components
      </NavLink>
      <NavLink style={defineNavLinkStyle} to='/contacts'>
        Contacts
      </NavLink>
    </nav>
  </header>
)

export default Header
