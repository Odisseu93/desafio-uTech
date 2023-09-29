export const dateFormat = (data: string)=> {
	const [date, time]= data.split(' ');

	const [, month, day] = date.split('-');
	const [hours, minutes, ] = time.split(':');

	return `${day}/${month} - ${hours}:${minutes}`;
};