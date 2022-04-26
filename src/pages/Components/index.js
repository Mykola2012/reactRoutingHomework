import { NavLink, Route, Routes } from 'react-router-dom'
import SignUpForm from '../SindUpForm'
import UserListPage from '../UserListPage'
import UsersLoader from '../UsersLoader'

const defineNavLinkStyle = ({ isActive }) => ({
  color: isActive ? 'red' : 'blue'
})

const Components = () => (
  <main>
    <h2>Components</h2>
    <NavLink style={defineNavLinkStyle} to='usersLoader'>
      Users Loader
    </NavLink>
    <NavLink style={defineNavLinkStyle} to='userListPage'>
      User List Page
    </NavLink>
    <NavLink style={defineNavLinkStyle} to='signUpForm'>
      Sign Up Form
    </NavLink>
    <Routes>
      <Route path='usersLoader' element={<UsersLoader />} />
      <Route path='userListPage' element={<UserListPage />} />
      <Route path='signUpForm' element={<SignUpForm />} />
    </Routes>
  </main>
)

export default Components
