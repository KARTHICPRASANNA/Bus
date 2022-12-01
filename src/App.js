import { React } from 'react';
import './App.scss';
import Bus from './component/Bus';

const App = (context) =>
	<div className="App" role="App">
		<Bus { ... context }/>
	</div>;

export default App;
