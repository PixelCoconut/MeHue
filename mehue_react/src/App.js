import React from 'react';
import './App.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//Shift + Alt + F to use prettier
class App extends React.Component {
  
	render() {
    
		//test
		let words = [
			{
				word: 'Test',
				north: 'Test',
        central: 'Test',
        south: 'Test' 
			},
			{
				word: 'Test2',
				north: 'Test2',
        central: 'Test2',
        south: 'Test2' 
			}
    ];
    
		return (
			<div className="App">
				<div className="App-header">
					<h1>MeHue: Vietnamese Dialects</h1>
					<h2>It is now {new Date().toLocaleTimeString()}</h2>
				</div>
				<p className="App-intro">
					I will make serious progress next Saturday. I'm taking a break from developing for this week. ~
					Lena, 2nd of September 2017
				</p>
				<hr />
        <div>
        <BootstrapTable data={ words }>
        <TableHeaderColumn width='150' dataField='word' isKey>Word</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='north'>North</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='central'>Central</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='south'>South</TableHeaderColumn>
        </BootstrapTable>
        </div>
			</div>    
		);
	}
}
export default App;
