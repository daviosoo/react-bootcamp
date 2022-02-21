const Title = ({course}) => <h1> {course} </h1>
const Part = (props) => <p> {props.partName} {props.exercises} </p>

const Content = (props) => {
  return(
    <>
      <Part partName = {props.parts[0]} exercises={props.exercises[0]}/>
      <Part partName = {props.parts[1]} exercises={props.exercises[1]}/>
      <Part partName = {props.parts[2]} exercises={props.exercises[2]}/>
    </>
  )
}

const Total = ({exercises})=> <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Title course={course}/>
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App