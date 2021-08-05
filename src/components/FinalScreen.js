import {useSelector, useDispatch} from 'react-redux'

const FinalScreen = () => {

  const dispatch = useDispatch()

  const score = useSelector(state => state.score)
  const questions = useSelector(state => state.questions)

  const replay = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0
    })
    dispatch({
      type: 'SET_SCORE',
      score: 0
    })
  }

  const settings = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: []
    })
    dispatch({
      type: 'SET_SCORE',
      score: 0
    })
    dispatch({
      type: 'SET_INDEX',
      index: 0
    })
  }

  return (
    <div className='quiz'>
      <h1 className='header'>You scored {score} out of {questions.length}!</h1>
      <div
        className='pixel'
        onClick={replay}
      >
        <p>Try again</p>
      </div>
      <div
        className='pixel'
        onClick={settings}
      >
        <p>Back to settings</p>
      </div>
    </div>
  )
}

export default FinalScreen
