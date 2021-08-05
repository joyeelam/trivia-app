import {useDispatch} from 'react-redux'

const Login = () => {

  const dispatch = useDispatch()

  const handleLogin = () => {
    const setLoggedin = value => {
      dispatch({
        type: 'SET_LOGGEDIN',
        loggedin: value
      })
    }
    setLoggedin(true)
  }

  return (
    <button onClick={handleLogin}>Login test</button>
  )
}

export default Login
