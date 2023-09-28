const fetchWeatherApi = async () => {
	return (await fetch('http://localhost:8080/mock/api.json')).json()
}

export class OpenweatherController {
	static async getListWeatherForecasts(req, res) {
		try {
			const json = await fetchWeatherApi()

			if (json) {
				if(json.list.length === 0) return res.status(200).json({
					list: []
				})
				
				return res
					.status(200)
					.json({
						list: json.list,
						media:
							json.list
								.map(({ main }) => Number(main.temp))
								.reduce((a, b) => a + b, 0) / json.list.length
					})}
		} catch (err) {
			res.status(500).json({ message: err })
		}
	}
}
