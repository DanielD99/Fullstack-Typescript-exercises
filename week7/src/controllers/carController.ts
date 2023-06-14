import { Request, Response } from 'express';
import Car from '../models/carModel'

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
export const getCars = async (req: Request, res: Response) => {
  try {
    //retrieve car data
    const cars = await Car.find();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'internal server error' });
  }
};

//get specific car by id
export const getCarById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    //find car by id
    const car = await Car.findById(id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//create new car
export const createCar = async (req: Request, res: Response) => {
  try {
    const { id, model, year, price, color } = req.body;

    if (!id || !model || !year || !price || !color) {
      return res.status(400).json({ error: 'missing required fields' });
    }

    const newCar = new Car({ id, model, year, price, color });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//update car partially by car id
export const updateCar = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedData = req.body;

    //find car by ID
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    //update car data
    Object.assign(car, updatedData);
    await car.save();
    res.json(car);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//Delete a car by ID
export const deleteCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {

    //Find car index by ID
    const car = await Car.findById(id);

    if (!car) {
      return res.status(404).json({ message: 'Car was not found' });
    }

    //Remove car from the array
    const deletedCar = await Car.findByIdAndRemove(id);
    res.json(deletedCar);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
