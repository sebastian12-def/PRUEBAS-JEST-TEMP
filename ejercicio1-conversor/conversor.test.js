const {
    celsiusAFahrenheit,
    fahrenheitACelsius
} = require('./conversor');

test('Convierte Celsius a Fahrenheit', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
});

test('Convierte Fahrenheit a Celsius', () => {
    expect(fahrenheitACelsius(32)).toBe(0);
});