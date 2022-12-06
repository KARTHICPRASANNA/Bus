import { React } from 'react';
import './App.scss';
import Bus from './component/Bus';
import getDimensions from './service/getDimensions';

const App = (context) => {
	const { config: { size }} = context;

	return <div className="App" role="App">
		<Bus { ...{ ...context, data: getDimensions(size) } }/>
	</div>;
};

export default App;
