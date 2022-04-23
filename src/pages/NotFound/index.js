import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  })

  return (
    <main>
      <h2>The page not found</h2>
      <Link to='/'>Home</Link>
    </main>
  )
}

export default NotFound
