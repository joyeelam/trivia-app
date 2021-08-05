import svgIcon from '../assets/signup.svg'
import {createButton, createSvgIcon} from 'react-social-login-buttons'

const config = {
  text: 'Sign up wih email',
  icon: createSvgIcon(svgIcon),
  iconFormat: name => `fa fa-user-circle`,
  style: {background: '#3b5998'},
  activeStyle: {background: '#293e69'}
}

const SignupButton = createButton(config)

export default SignupButton
