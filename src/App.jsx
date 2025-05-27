const Header = () => {
  const course = "Half Stack application development";
  return <h1>{course}</h1>;
};

import PropTypes from 'prop-types';

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

Part.propTypes = {
  part: PropTypes.string.isRequired,
  exercises: PropTypes.number.isRequired
};

const Content = () => {
  return (
    <div>
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="Using props to pass data" exercises={7} />
      <Part part="State of a component" exercises={14} />
    </div>
  );
};

const Total = () => {
  const exercises1 = 11;
  const exercises2 = 7;
  const exercises3 = 14;

  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;
