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
          I will make more progress next Saturday. I spent more time on fixing
          up my entire Trello board ~ Lena, 19th of August 2017
        </p>
        <hr />

        <table class="center">
          <tr class="dialects">
          <th class="start">English Translation</th>
            <th class="start">North</th>
            <th class="start">Central</th>
            <th class="start">South</th>
          </tr>

          <tr>
            <td class="start">This</td>
            <td>này</td>
            <td>ni</td>
            <td>này</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
