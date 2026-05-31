function validarPassword(password) {

    const longitudMinima = password.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);

    return {
        longitudMinima,
        tieneMayuscula,
        tieneNumero
    };
}

module.exports = validarPassword;