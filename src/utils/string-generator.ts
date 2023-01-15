/**
 * Generates a random string with letters and numbers
 * @function stringGenerator
 * @param {number} length	string desired length
 * @return {string} result 	the generated string
 **/
export function stringGenerator(length: number = 32): string {
	const chars: string[] = 'asdfghjklzxcvbnmqwertyuiop0123456789'.split('');
	const result: string[] = [];

	for (let i = 0; i < length; i++) {
		result.push(chars[Math.floor(Math.random() * chars.length)]);
	}

	return result.join('');
}