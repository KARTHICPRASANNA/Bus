import { React } from 'react';
import './App.scss';
import Bus from './component/Bus';
import getBusDimension from './service/getBusDimension';
import buses from './datas/dimension';

const App = (context) => <div className="App" role="App">
	{buses.map((data, key) =>
		<Bus
			key={ key }
			{ ...{ ...context, data: getBusDimension(data) } }
		/>)}
</div>;

export default App;
