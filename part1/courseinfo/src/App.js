const Title = ({course}) => <h1> {course} </h1>
const Part = (props) => <p> {props.partName} {props.exercises} </p>

const Content = (props) => {
  return(
    <>
      <Part partName = {props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part partName = {props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part partName = {props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props)=> <p>Number of exercises {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Title course={course}/>
      <Content parts={parts}/>
      <Total exercises={parts}/>
    </div>
  )
}

export default App