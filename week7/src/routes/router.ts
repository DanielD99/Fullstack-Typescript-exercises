import express from 'express';
import {
    getCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar,
} from '../controllers/cars';


const router = express.Router();

//define routes
router.get('api/v1/cars', getCars);
router.get('/api/v1/cars/:id', getCarById);
router.post('/api/v1/cars ', createCar);
router.patch('/api/v1/cars/:id', updateCar);
router.delete('/api/v1/cars/:id', deleteCar);


export default router;