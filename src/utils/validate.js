export function isvalidUsername(username){
	const usernamemap = ['admin','editor'];
	return usernamemap.indexOf(username.trim()) >= 0;
}
