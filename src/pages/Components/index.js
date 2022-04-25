import { Link, Route, Routes } from 'react-router-dom'
import SignUpForm from '../SindUpForm'
import UserListPage from '../UserListPage'
import UsersLoader from '../UsersLoader'

const Components = () => (
  <main>
    <h2>Components</h2>
    <Link to='usersLoader'>Users Loader</Link>
    <Link to='userListPage'>User List Page</Link>
    <Link to='signUpForm'>Sign Up Form</Link>
    <Routes>
      <Route part='usersLoader' element={<UsersLoader />} />
      <Route part='userListPage' element={<UserListPage />} />
      <Route part='signUpForm' element={<SignUpForm />} />
    </Routes>
  </main>
)

export default Components
