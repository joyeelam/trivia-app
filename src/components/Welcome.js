import {Player} from '@lottiefiles/react-lottie-player'
import {GoogleLoginButton} from 'react-social-login-buttons'

import {useAuth} from '../utils/AuthContext'

import Signup from '../utils/Signup'
import Login from '../utils/Login'

const Welcome = () => {

  const {googleLogin} = useAuth()

  const handleGoogleLogin = async () => {
    try {
      await googleLogin()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='container'>
      <Player autoplay loop src='https://assets1.lottiefiles.com/packages/lf20_euaveaxu.json' style={{height: '250px'}}/>
      <h1 className='header'>Welcome to Trivia</h1>
      <hr/>
      <Signup/>
      <Login/>
      <GoogleLoginButton
        onClick={handleGoogleLogin}
        style={{width: '250px', fontSize:'1rem'}}
      />
    </div>
  )
}

export default Welcome
