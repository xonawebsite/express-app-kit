export function stringGenerator(length: number = 32): string {
	const chars: string[] = 'asdfghjklzxcvbnmqwertyuiop0123456789'.split('');
	const result: string[] = [];

	for (let i = 0; i < length; i++) {
		result.push(chars[Math.floor(Math.random() * chars.length)]);
	}

	return result.join('');
}