import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>MeHue: Vietnamese Dialects</h1>
          <h2>
            It is now {new Date().toLocaleTimeString()}
          </h2>
        </div>
        <p className="App-intro">
          I will make serious progress next Saturday. I'm taking a break from developing for this week. ~ Lena, 2nd of September 2017
        </p>
        <hr />
        Notes: The table I added before wasn't compliant with ReactJS. I will add a table with three columns to represent the three parts of Vietnam.
      </div>
    );
  }
}

export default App;
