var utils  = require('course-utilities');
var mit = utils.load('./mit.js', 'mit');

describe('MIT', () => {

    test('Object properties present', () => {
        expect(mit).toHaveProperty('city');
        expect(mit).toHaveProperty('colors');
        expect(mit).toHaveProperty('mascot');
    });

    test('City match', () => {
        expect(mit.city).toBe('Cambridge');
    });

    test('Colors match', () => {
        expect(mit.colors).toContain('Silver Gray');    
    });

    test('Founded Date', () => {
        expect(mit.founded).toMatch('1861');   
    });

    test('Motto', () => {
        expect(mit.motto).toMatch('Mens et Manus');
    });
});