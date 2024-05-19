import "./App.css";
import ProgressBar from "./components/ProgressBar";
import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  return (
    <>
      <ProgressBar completionValue={10} />
      <ProgressBar completionValue={30} />
      <ProgressBar completionValue={50} />
      <TemperatureConverter />
    </>
  );
}

export default App;
