import { NavLink, Route, Routes } from 'react-router-dom'
import SignUpForm from '../SindUpForm'
import UserListPage from '../UserListPage'
import UsersLoader from '../UsersLoader'
import styles from './Components.module.scss'

const defineNavLinkStyle = ({ isActive }) => ({
  color: isActive ? 'rgb(54, 196, 201)' : 'rgb(2, 2, 2)'
})

const Components = () => (
  <main className={styles.container}>
    <h2 className={styles.subTitle}>Components</h2>
    <div className={styles.linkWrapper}>
      <NavLink style={defineNavLinkStyle} to='usersLoader'>
        Users Loader
      </NavLink>
      <NavLink style={defineNavLinkStyle} to='userListPage'>
        User List Page
      </NavLink>
      <NavLink style={defineNavLinkStyle} to='signUpForm'>
        Sign Up Form
      </NavLink>
    </div>

    <Routes>
      <Route path='usersLoader' element={<UsersLoader />} />
      <Route path='userListPage' element={<UserListPage />} />
      <Route path='signUpForm' element={<SignUpForm />} />
    </Routes>
  </main>
)

export default Components
