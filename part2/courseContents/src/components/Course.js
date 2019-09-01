import React from 'react';

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

export default Courses