const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map((item, index) => (
        <Part key={index} name={item.name} exercises={item.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.course.parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);

  return (
    <div>
      <p>Number of exercises: {total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />

      <Content course={course} />

      <Total course={course} />
    </div>
  );
};

export default App;
