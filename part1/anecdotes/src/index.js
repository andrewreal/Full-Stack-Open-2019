import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div> 
  )
}

const Heading = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const MostVotes = ({anecdotes, points}) => {
  const pointsArr = Object.entries(points);
  let largest = 0;
  let position = null;
  for (const [key, value] of pointsArr){
    if ( value > largest ){
      largest = value;
      position = key;
    }
  }  
  return (
    <p>
      {anecdotes[position]} has {points[position]} votes.
    </p>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const initialPoints = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)

const addPoint = (selected, points, setPoints) => {
  let pointsTemp = {...points};
  pointsTemp[selected] = points[selected]+1;
  setPoints(pointsTemp);
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({...initialPoints});

  return (
    <div>
      <Heading text="Anecdote of the day"/>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <Button text="Vote" handleClick={()=>addPoint(selected, points, setPoints) }></Button>
      <Button text="Next anecdote" handleClick={()=>setSelected(Math.floor(Math.random() * 5 ) ) }></Button>
      <Heading text="Anecdote with the most votes"/>
      <MostVotes anecdotes={props.anecdotes} points={points}/>
    </div>
  )
}

ReactDOM.render(
  <App 
    anecdotes={anecdotes} 
    />,
  document.getElementById('root')
)