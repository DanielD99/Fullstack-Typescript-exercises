"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.createCar = exports.getCarById = exports.getCars = void 0;
const carModel_1 = __importDefault(require("../models/carModel"));
const cars = [
    {
        id: '1',
        model: 'Audi',
        year: 2010,
        price: 10000,
        color: 'red',
    },
    {
        id: '2',
        model: 'Volvo',
        year: 2012,
        price: 12000,
        color: 'blue',
    },
    {
        id: '3',
        model: 'Saab',
        year: 2001,
        price: 5000,
        color: 'green',
    },
    {
        id: '4',
        model: 'BMW',
        year: 2015,
        price: 15000,
        color: 'black',
    },
    {
        id: '5',
        model: 'Mercedes',
        year: 2017,
        price: 20000,
        color: 'red',
    },
];
//get all cars
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //retrieve car data
        const cars = yield carModel_1.default.find();
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'internal server error' });
    }
});
exports.getCars = getCars;
//get specific car by id
const getCarById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        //find car by id
        const car = yield carModel_1.default.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    }
    catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getCarById = getCarById;
//create new car
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, model, year, price, color } = req.body;
        if (!id || !model || !year || !price || !color) {
            return res.status(400).json({ error: 'missing required fields' });
        }
        const newCar = new carModel_1.default({ id, model, year, price, color });
        yield newCar.save();
        res.status(201).json(newCar);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createCar = createCar;
//update car partially by car id
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        //find car by ID
        const car = yield carModel_1.default.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        //update car data
        Object.assign(car, updatedData);
        yield car.save();
        res.json(car);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.updateCar = updateCar;
//Delete a car by ID
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        //Find car index by ID
        const car = yield carModel_1.default.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car was not found' });
        }
        //Remove car from the array
        const deletedCar = yield carModel_1.default.findByIdAndRemove(id);
        res.json(deletedCar);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.deleteCar = deleteCar;
