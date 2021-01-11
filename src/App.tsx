import React from 'react';
import './App.css';
import Exercise from "./Containers/Exercise";
import CenteredLayout from "./Layouts/CenteredLayout";

function App() {
  return (
    <div className="App">
        <CenteredLayout>
            <Exercise />
        </CenteredLayout>
    </div>
  );
}

export default App;
