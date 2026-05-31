const {
    agregarUsuario,
    buscarUsuario,
    eliminarUsuario
} = require('./usuarios');

test('Agregar usuario', () => {
    expect(agregarUsuario('Juan')).toContain('Juan');
});

test('Buscar usuario', () => {
    expect(buscarUsuario('Juan')).toBe(true);
});

test('Eliminar usuario', () => {
    eliminarUsuario('Juan');
    expect(buscarUsuario('Juan')).toBe(false);
});