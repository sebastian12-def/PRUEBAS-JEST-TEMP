const validarPassword = require('./password');

test('Valida longitud mínima', () => {
    expect(validarPassword('Abc12345').longitudMinima).toBe(true);
});

test('Valida mayúscula', () => {
    expect(validarPassword('Abc12345').tieneMayuscula).toBe(true);
});

test('Valida número', () => {
    expect(validarPassword('Abc12345').tieneNumero).toBe(true);
});

test('Password inválida', () => {
    expect(validarPassword('abc').longitudMinima).toBe(false);
});