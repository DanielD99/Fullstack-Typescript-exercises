import dotenv from 'dotenv';
import morgan = require('morgan');
import express = require('express');
import { logger } from './logger';
import fs from 'fs';
import path from 'path';


dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();
app.use(express.json()); // Parses the request body as JSON
app.use(morgan('dev'));// Logs the requests to the console

if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
    app.use(morgan('dev'));
}


//GET people
app.get('/people', (req, res) => {
    fs.readFile('people.json', 'utf8', (err, data) => {
        if (err) {
            logger.error(err);
            console.log("clg:", err)
            res.sendStatus(500).json({ error: 'Unable to read people' });
        } else {
            const people = JSON.parse(data);
            res.status(200).json(people);
        }
    });
});


//GET people by id
app.get('/people:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('people.json', 'utf8', (err, data) => {
        if (err) {
            logger.error(err);
            console.log("clg:", err)
            res.sendStatus(500).json({ message: 'Unable to read people', id });
        } else {
            const people = JSON.parse(data);
            const person = people.find((p: { id: string; }) => p.id === id);
            if (person) {
                res.status(200).json(person);
            } else {
                res.status(404).json({ error: 'Person not found ', id });
            }
        }
    });
});



// POST PERSON(ADD)
app.post('/people', (req, res) => {
    const person = req.body;
    fs.readFile('people.json', 'utf8', (err, data) => {
        if (err) {
            logger.error(err);
            console.log("clg:", err)
            res.sendStatus(500).json({ error: 'Unable to read people' });
        } else {
            const people = JSON.parse(data);
            people.push(person);
            fs.writeFile('people.json', JSON.stringify(people), 'utf8', err => {
                if (err) {
                    console.log("clg:", err)
                    logger.error(err);
                    res.status(500).json({ error: 'Unable to add person' });
                } else {
                    res.status(200).json(person);
                }
            });
        }
    });
});


// PUT PERSON(UPDATE)
app.put('/people/:id', (req, res) => {
    const id = req.params.id;
    const updatedPerson = req.body;
    fs.readFile('people.json', 'utf8', (err, data) => {
        if(err) {
            console.log("clg:", err)
            logger.error(err);
            res.sendStatus(500).json({ error: 'Unable to read people' });
        } else {
            const people = JSON.parse(data);
            const index = people.findIndex((p: { id: string; }) => p.id === id);
            if (index === -1) {
                people[index] = updatedPerson;
                fs.writeFile('people.json', JSON.stringify(people), 'utf8', err => {
                    if(err) {
                        console.log("clg:", err)
                        logger.error(err);
                        res.status(500).json({ error: 'Unable to update person' });
                    } else {
                        res.status(200).json(updatedPerson);
                    }
                });
            } else {
                res.status(404).json({ error: 'Person not found', id });
            }
        }
    });
});

// PATCH PERSON(PARTIAL UPDATE)
app.patch('/people/:id', (req, res) => {
    const id = req.params.id;
    const updatedFields = req.body;
    fs.readFile('people.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        logger.error(err);
        res.status(500).json({ error: 'unable to read people' });
      } else {
        const people = JSON.parse(data);
        const index = people.findIndex((p: { id: string; }) => p.id === id);
        if (index !== -1) {
          Object.assign(people[index], updatedFields);
          fs.writeFile('people.json', JSON.stringify(people), 'utf8', err => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Error in patching person' });
            } else {
              res.status(200).json(people[index]);
            }
          });
        } else {
          res.status(404).json({ error: 'Person not found' });
        }
      }
    });
  });
  

// DELETE PERSON
app.delete('/people/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('people.json', 'utf8', (err, data) => {
        const id = req.params.id;
        fs.readFile('people.json', 'utf8', (err, data) => {
            if (err) {
                console.log("clg:", err)
                logger.error(err);
                res.status(500).json({ error: 'Unable to read people' });
            } else {
                let people = JSON.parse(data);
                const index = people.findIndex((p: { id: string; }) => p.id === id);
                if (index !== -1) {
                    const deletedPerson = people.splice(index, 1)[0];
                    fs.writeFile('people.json', JSON.stringify(people), 'utf8', err => {
                        if (err){
                            console.log("clg:", err)
                            logger.error(err);
                            res.status(500).json({ error: 'Unable to delete person' });
                        } else {
                            res.status(200).json(deletedPerson);
                        }
                        });
                    } else {
                        res.status(404).json({ error: 'Person not found', id });
                    }
                }
            });
        });
    });





const PORT = process.env.PORT;

app.get('/', (req, res) => {
    logger.info('handling requests for /');
    res.send('Hello World');
});




app.listen(PORT, () => {
    console.log(`Server is listening to http://localhost:${PORT}`);
});
