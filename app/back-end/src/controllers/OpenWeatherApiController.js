import { getListWeatherForecastsApi } from "../services/getListWeatherForecasts.js";

export class OpenWeatherApiController {
	static async getListWeatherForecasts(req, res) {
		try {
			const json = await getListWeatherForecastsApi();
			
			if (json) {
			console.log(json);	
				if(json.list.length === 0) return res.status(200).json({
					list: []
				});
				
				return res
					.status(200)
					.json({
						list: json.list,
						media:
							json.list
								.map(({ main }) => Number(main.temp))
								.reduce((a, b) => a + b, 0) / json.list.length
					});
				};
		} catch (err) {
			res.status(500).json({ message: new Error (err).message });
		};
	}
};
