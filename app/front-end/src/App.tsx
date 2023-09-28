import { useEffect } from 'react';

function App() {
	useEffect(() => {
		(async () => {
			const weatherList = await (await fetch('http://localhost:8080/api/')).json();

			console.log(weatherList);
		})();
	},[]);

	return (
		<h1>
			<img src="assets/img/florianopolis_brasao.png" alt="Florianópolis brasão" width={100}/>
			Florianópolis Clima
		</h1>
	);
}

export default App;
