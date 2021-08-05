import './App.css'
import {useSelector} from 'react-redux'

import {useAuth} from './utils/AuthContext'

import Settings from './components/Settings'
import Question from './components/Question'
import FinalScreen from './components/FinalScreen'
import Welcome from './components/Welcome'

const App = () => {

  const {currentUser, logout} = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error(error)
    }
  }

  const questions = useSelector(state => state.questions)
  const questionIndex = useSelector(state => state.index)

  let component

  if (!currentUser) {
    component = <Welcome/>
  } else {
    if (questions.length && questionIndex + 1 <= questions.length) {
      component = <Question/>
    } else if (!questions.length) {
      component = <Settings handleLogout={handleLogout}/>
    } else {
      component = <FinalScreen/>
    }
  }

  return (
    <div className='center-div'>
      {component}
    </div>
  )
}

export default App
