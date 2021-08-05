import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import FetchButton from './FetchButton'

const Settings = ({handleLogout}) => {

  const dispatch = useDispatch()

  const [options, setOptions] = useState(null)
  const loading = useSelector(state => state.options.loading)
  const questionCategory = useSelector(state => state.options.question_category)
  const questionDifficulty = useSelector(state => state.options.question_difficulty)
  const questionType = useSelector(state => state.options.question_type)
  const questionAmount = useSelector(state => state.options.amount_of_questions)

  useEffect(()=>{

    const setLoading = value => {
      dispatch({
        type: 'CHANGE_LOADING',
        loading: value
      })
    }

    setLoading(true)
    fetch('https://opentdb.com/api_category.php')
    .then((resp) => resp.json())
    .then((data) => {
      setLoading(false)
      setOptions(data.trivia_categories)
    })
  }, [setOptions, dispatch])

  const handleCategoryChange = event => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      value: event.target.value
    })
  }

  const handleDifficultyChange = event => {
    dispatch({
      type: 'CHANGE_DIFFICULTY',
      value: event.target.value
    })
  }

  const handleTypeChange = event => {
    dispatch({
      type: 'CHANGE_TYPE',
      value: event.target.value
    })
  }

  const handleAmountChange = event => {
    dispatch({
      type: 'CHANGE_AMOUNT',
      value: event.target.value
    })
  }

  if (!loading) {
    return (
      <div className='container'>
        <h1 className='logo'><i className="fas fa-user-astronaut"></i></h1>
        <hr/>
        <h1 className='header'>Trivia</h1>
        <div className='quiz-setting'>
          <h5>Category:</h5>
          <select
            value={questionCategory}
            onChange={handleCategoryChange}
          >
            <option>All</option>
            {options && options.map(option => (
              <option value={option.id} key={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
        <div className='quiz-setting'>
          <h5>Difficulty:</h5>
          <select value={questionDifficulty} onChange={handleDifficultyChange}>
            <option value='' key='difficulty-0'>All</option>
            <option value='easy' key='difficulty-1'>Easy</option>
            <option value='medium' key='difficulty-2'>Medium</option>
            <option value='hard' key='difficulty-3'>Hard</option>
          </select>
        </div>
        <div className='quiz-setting'>
          <h5>Question Type:</h5>
          <select value={questionType} onChange={handleTypeChange}>
            <option value='' key='type-0'>All</option>
            <option value='multiple' key='type-1'>Multiple Choice</option>
            <option value='boolean' key='type-2'>True / False</option>
          </select>
        </div>
        <div className='quiz-setting'>
          <h5>Amount of Questions:</h5>
          <input type='number' value={questionAmount} onChange={handleAmountChange}></input>
        </div>
        <FetchButton text='Get started!'/>
        <div className='pixel' onClick={handleLogout}><p>Log Out</p></div>
      </div>
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}

export default Settings
