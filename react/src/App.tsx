import "./App.css";

const numbers = [1, 2, 3];

function App() {
  return (
    <>
      {numbers.map((x) => (
        <div key={x}>{x}</div>
      ))}
    </>
  );
}

export default App;
