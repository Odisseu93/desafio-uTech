const fetchWeatherApi = async () => {
	return (await fetch('http://localhost:8080/mock/api.json')).json()
}

export class OpenweatherController {
	static async getListWeatherForecasts(req, res) {
		try {
			const json = await fetchWeatherApi()
			if (json) {
				return res.status(200).json(json.list)
			}
		} catch (err) {
			res.status(500).json({ message: err })
		}
	}
}
