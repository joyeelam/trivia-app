import {useState, useRef} from 'react'
import {Alert, Button, Form, Modal} from 'react-bootstrap'

import {useAuth} from '../utils/AuthContext'
import LoginButton from '../components/LoginButton'

const Login = () => {

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to log in')
    }
    setLoading(false)
    setShow(false)
  }

  return (
    <>
      <LoginButton onClick={handleShow} style={{width: '250px', fontSize:'1rem'}}/>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' required ref={emailRef}/>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' required ref={passwordRef}/>
            </Form.Group>
            <div className='w-100 text-center mt-2'>
              Don't have an account yet? Sign Up
            </div>
            <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Login
