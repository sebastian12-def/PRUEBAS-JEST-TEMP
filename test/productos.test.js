import request from 'supertest';
import app from '../app.js';

jest.setTimeout(15000);

describe('CRUD Productos', () => {

    let productoId;

    test('POST crear producto', async () => {

        const response = await request(app)
            .post('/api/productos')
            .send({
                codigo: 1001,
                nombre: 'Mouse Gamer',
                precio: 50000,
                categoria: 'Electrodomestico'
            });

        console.log(response.body);

        productoId = response.body._id;

        expect(response.statusCode).toBe(201);

    });

    test('GET productos', async () => {

        const response = await request(app)
            .get('/api/productos');

        expect(response.statusCode).toBe(200);

    });

    test('PUT actualizar producto', async () => {

        const response = await request(app)
            .put(`/api/productos/${productoId}`)
            .send({
                codigo: 1001,
                nombre: 'Teclado RGB',
                precio: 80000,
                categoria: 'Electrodomestico'
            });

        expect(response.statusCode).toBe(200);

    });

    test('DELETE eliminar producto', async () => {

        const response = await request(app)
            .delete(`/api/productos/${productoId}`);

        expect(response.statusCode).toBe(200);

    });

});