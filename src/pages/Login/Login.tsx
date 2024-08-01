import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginSuccess } from 'utils/redux/slice/login.slice'
import './Login.scss'

const Login = () => {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // TODO: Add login logic here

    // Once the user is logged in, navigate to the home page
    // dispatch(loginSuccess('token'))
    navigate('/home')
  }

  return (
    <div className='p-2'>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
