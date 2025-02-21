const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.courseInfo[0].name} {props.courseInfo[0].exercise}</p>
      <p>{props.courseInfo[1].name} {props.courseInfo[1].exercise}</p>
      <p>{props.courseInfo[2].name} {props.courseInfo[2].exercise}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.courseInfo[0].exercise + props.courseInfo[1].exercise + props.courseInfo[2].exercise}
    </p>
  )
} 
const App = () => {
  const course = {
    name: 'Half Stack application development',
    courseInfo: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7,
      },
      {
        name: 'State of a component',
        exercise: 14,
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content courseInfo = {course.courseInfo} />
      <Total courseInfo = {course.courseInfo}/>
    </div>
  )
}

export default App