import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  const parts = () => props.parts.map(part => 
    <Part 
      key={part.id}
      name={part.name}
      exercises={part.exercises}
    />
  )
  return (
    <div>
      {parts()}
    </div>
  )
}

const Total = (props) => {
  var initialValue = 0;
  const numberOfExercises = props.parts.reduce(
    (accumulator, parts) => accumulator + parts.exercises,
    initialValue
  );
  return (
    <p><strong>Total number of exercises {numberOfExercises}</strong></p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header courseName={props.courseName}/>
      <Content parts={props.parts}/>
      <Total parts={props.parts}/>
    </div>
  )
}

const Courses = (props) => {
  const courses = () => props.courses.map(course => 
    <Course 
      key={course.id}
      courseName={course.name}
      parts={course.parts}
    />
  )
  return (
    <div>
      {courses()}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));