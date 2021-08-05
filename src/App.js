import './App.css'
import {useSelector} from 'react-redux'

import Settings from './components/Settings'
import Question from './components/Question'
import FinalScreen from './components/FinalScreen'

const App = () => {

  const questions = useSelector(state => state.questions)
  const questionIndex = useSelector(state => state.index)

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question/>
  } else if (!questions.length) {
    component = <Settings/>
  } else {
    component = <FinalScreen/>
  }

  return (
    <div className='container'>
      {component}
    </div>
  )
}

export default App
