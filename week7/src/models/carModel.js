"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
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
const CarModel = (0, mongoose_1.model)('Car', carSchema);
exports.default = CarModel;
