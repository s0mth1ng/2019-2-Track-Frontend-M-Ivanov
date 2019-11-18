/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

import convertBytesToHuman from '../convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
	expect(convertBytesToHuman('123')).toBe(false);
	expect(convertBytesToHuman('asd')).toBe(false);
	expect(convertBytesToHuman(-10)).toBe(false);
	expect(convertBytesToHuman(NaN)).toBe(false);
	expect(convertBytesToHuman(null)).toBe(false);
	expect(convertBytesToHuman(Infinity)).toBe(false);
	expect(convertBytesToHuman({ num: '123' })).toBe(false);
	expect(convertBytesToHuman(undefined)).toBe(false);
	expect(convertBytesToHuman(true)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
	expect(convertBytesToHuman(1)).toBe('1 B');
	expect(convertBytesToHuman(1024)).toBe('1.000 KB');
	expect(convertBytesToHuman(7457623572567)).toBe('6.783 TB');
});
