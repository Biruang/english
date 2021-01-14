import React from 'react';
import './App.css';
import Exercise from "./Containers/Exercise";
import CenteredLayout from "./Layouts/CenteredLayout";
import data from "./Assets/data";

function App() {
  return (
    <div className="App">
        <CenteredLayout>
            <Exercise data={data} />
        </CenteredLayout>
    </div>
  );
}

export default App;
