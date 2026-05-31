import mongoose from 'mongoose';

const conectarDB = async () => {

    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/productosdb');

        console.log('MongoDB conectado');

    } catch (error) {

        console.error(error);

    }

};

export default conectarDB;