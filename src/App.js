import React from "react";
import "./App.css";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions/temperatureActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.temperature);

  const fetchData = () => {
    dispatch(getData());
  };

  return (
    <div className="App">
      {state.loading && <p>Loading...</p>}
      {state.errors && <p>An error occurred while getting the data</p>}

      <div className={"chart-wrapper"}>
        <Line data={state.data} />
      </div>
    </div>
  );
}

export default App;
