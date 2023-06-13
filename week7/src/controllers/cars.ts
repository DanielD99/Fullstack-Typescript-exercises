import { Request, Response } from 'express';

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
export const getCars = (req: Request, res: Response) => {
  try {
    //retrieve car data
    res.json(cars);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'internal server error' });
  }
};

//get specific car by id
export const getCarById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    //find car by id
    const car = cars.find((car) => car.id === id);

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
export const createCar = (req: Request, res: Response) => {
  try {
    const { id, model, year, price, color } = req.body;
    if (!id || !model || !year || !price || !color) {
      return res.status(400).json({ error: 'missing required fields' });
    }

    //validate input

    //add the new car to the array
    const newCar = { id, model, year, price, color };
    cars.push(newCar);
    res.status(201).json(newCar);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//update car partially by car id
export const updateCar = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    //find car by ID
    const car = cars.find((car) => car.id === id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    //update car data
    Object.assign(car, updatedData);

    res.json(car);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//Delete a car by ID
export const deleteCar = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //Find car index by ID
    const carIndex = cars.findIndex((car) => car.id === id);

    if (carIndex === -1) {
      return res.status(404).json({ message: 'Car was not found' });
    }

    //Remove car from the array
    const deletedCar = cars.splice(carIndex, 1)[0];

    res.json(deletedCar);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
