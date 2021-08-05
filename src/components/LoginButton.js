import svgIcon from '../assets/login.svg'
import {createButton, createSvgIcon} from 'react-social-login-buttons'

const config = {
  text: 'Log in with email',
  icon: createSvgIcon(svgIcon),
  iconFormat: name => `fas fa-sign-in-alt`,
  style: {background: '#3b5998'},
  activeStyle: {background: '#293e69'}
}

const LoginButton = createButton(config)

export default LoginButton
