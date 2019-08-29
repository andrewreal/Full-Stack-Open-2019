import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Result = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="Give Feedback"/>
      <Button text="Good" handleClick={()=>setGood(good+1)}/>
      <Button text="Neutral" handleClick={()=>setNeutral(neutral+1)}/>
      <Button text="Bad" handleClick={()=>setBad(bad+1)}/>
      <Header text="Statistics"/>
      <Result text="Good" value={good}/>
      <Result text="Neutral" value={neutral}/>
      <Result text="Bad" value={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)