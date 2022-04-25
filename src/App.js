import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import UsersLoader from './pages/UsersLoader'
import UserListPage from './pages/UserListPage'
import NotFound from './pages/NotFound'
import SignUpForm from './pages/SindUpForm'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='usersLoader' element={<UsersLoader />} />
        <Route path='userListPage' element={<UserListPage />} />
        <Route path='signUpForm' element={<SignUpForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
