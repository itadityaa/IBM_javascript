function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, Aditya!</h1>
      <p>Current Date: {currDate.toLocaleDateString()}</p>
      <p>Current Time: {currDate.toLocaleTimeString()}</p>

      <p>
        Date: {currDate.toLocaleDateString()}, and the time is now:{" "}
        {currDate.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default App;
