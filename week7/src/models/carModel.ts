import { Schema, model } from 'mongoose';

const carSchema = new Schema({
    model: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 20
    },
    year: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        enum: ['red', 'green', 'blue', 'black', 'white'],
    },
  createdAt: {
     type: Date,
      default: Date.now
    }
});

const CarModel = model('Car', carSchema)
export default CarModel;
