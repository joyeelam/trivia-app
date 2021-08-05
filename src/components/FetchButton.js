import {useSelector, useDispatch} from 'react-redux'

const FetchButton = (props) => {

  const dispatch = useDispatch()

  const questionCategory = useSelector(state => state.options.question_category)
  const questionDifficulty = useSelector(state => state.options.question_difficulty)
  const questionType = useSelector(state => state.options.question_type)
  const questionAmount = useSelector(state => state.options.amount_of_questions)

  const setLoading = value => {
    dispatch({
      type: 'CHANGE_LOADING',
      loading: value
    })
  }

  const setQuestions = value => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: value
    })
  }

  const handleQuery = async () => {
    let apiURL = `https://opentdb.com/api.php?amount=${questionAmount}`
    if (questionCategory.length) {
      apiURL = apiURL.concat(`&category=${questionCategory}`)
    }
    if (questionDifficulty.length) {
      apiURL = apiURL.concat(`&difficulty=${questionDifficulty}`)
    }
    if (questionType.length) {
      apiURL = apiURL.concat(`&type=${questionType}`)
    }
    setLoading(true)
    await fetch(apiURL)
    .then((resp) => resp.json())
    .then((data) => {
      setQuestions(data.results)
      setLoading(false)
    })
  }

  return (
    <div
      className='pixel'
      onClick={handleQuery}
    >
      <p>{props.text}</p>
    </div>
  )
}

export default FetchButton
