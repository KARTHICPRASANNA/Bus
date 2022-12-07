import { React } from 'react';
import './App.scss';
import Bus from './component/Bus';
import getBusDimension from './service/getBusDimension';

const App = (context) => {
	const { config } = context;

	return <div className="App" role="App">
		{config.buses.map((data, key) =>
			<Bus
				key={ key }
				{ ...{ ...context, data: getBusDimension(data) } }
			/>)}
	</div>;
};

export default App;
