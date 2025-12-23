function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>I am {props.age} years</p>
    </div>
  );
}

export default Greeting;
