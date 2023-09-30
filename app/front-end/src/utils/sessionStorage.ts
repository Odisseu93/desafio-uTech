const set = <T>(key: string, data: T) => {
	try {
		sessionStorage[key] = JSON.stringify(data);
		console.info('Data successfully saved in session storage!');
	} catch (error) {
		throw new Error((error as {message: string}).message);
	}
};   

const get = (key: string): JSON | null =>  {
	try {
		if(sessionStorage[key]){
			console.info('Data retrieved saved from session storage!');
			return  JSON.parse(sessionStorage[key]);
		}

		console.error('There is no data saved for this key');
		return null;
	} catch (error) {
		console.error(Error((error as {message: string}).message));
		return null;
	}
};

/**
 set and get utility functions for session storage
 */
export const ss = { set, get };