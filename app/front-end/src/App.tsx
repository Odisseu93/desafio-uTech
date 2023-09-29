import { useState, useLayoutEffect } from 'react';

import * as C from './styles';
import Footer from './components/Footer';
import { dateFormat } from './utils/dateFormat';
import { WeatherForecastList } from './types/WeatherForecastList';
import { toast } from './libs';

function App() {
	const [allWeatherForecasts,  setAllWeatherForecasts] = useState<null | WeatherForecastList>(null);
	
	const getApiData = async () =>  {
		try {
			const weatherList = await (await fetch('http://localhost:8080/api/')).json();

			if(weatherList) setAllWeatherForecasts(weatherList); 
		
		} catch(err) {
			toast.error('Aconteceu algum erro ao buscar os dados!');
			throw new Error((err as {message: string}).message);
		}
	};
	
	useLayoutEffect(() => {getApiData();} ,[]);

	return (
		<>
			<C.App>
				<h1> <img src="assets/img/florianopolis_brasao.png" alt="Florianópolis brasão" width={100}/> Florianópolis Clima </h1>

				<h2>Previsões</h2>

				<ul>
					{
						allWeatherForecasts ? 
						
							allWeatherForecasts.list.length === 0 && 'Nenhuma previsão foi encontrada!' ||

							allWeatherForecasts.list.map((data, index: number) => (
								<li key={index}>
									<p className='date'>{dateFormat(data.dt_txt)}</p>
									<p className='temp'>{data.main.temp.toFixed(0)}º</p>
									<p>
									Sensação térmica: <span className='feels-like'>{data.main.feels_like.toFixed(0)}º</span>
									Minima: <strong className='temp-min'>{data.main.temp_min.toFixed(0)}º</strong>
									Máxima: <strong className='temp-max'>{data.main.temp_max.toFixed(0)}º</strong></p>

									Umidade: <span className='humidity'>{data.main.humidity}%</span>
								</li>
							)) : 'Aconteceu algo inesperado, tente novamente mais tarde!'
					}
				</ul>

				{allWeatherForecasts && <h2>Média: <span className='media'>{allWeatherForecasts.media.toFixed(2)}º</span></h2>}
			</C.App>

			<Footer/>
		</>
	);
}

export default App;
