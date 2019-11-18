import correctSentence from '../correctSentence';

test('returns correct sentence', () => {
	expect(correctSentence('greetings, friends')).toBe('Greetings, friends.');
	expect(correctSentence('Greetings, friends')).toBe('Greetings, friends.');
	expect(correctSentence('Greetings, friends.')).toBe('Greetings, friends.');
});

test('returns false', () => {
	expect(correctSentence(123)).toBe(false);
	expect(correctSentence(null)).toBe(false);
});
