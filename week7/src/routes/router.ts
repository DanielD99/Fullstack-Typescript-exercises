import express from 'express';
import {
    getCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar,
} from '../controllers/carController';


const router = express.Router();

//define routes
router.get('/', getCars);
router.get('/:id', getCarById);
router.post('/', createCar);
router.patch('/:id', updateCar);
router.delete('/:id', deleteCar);


export default router;