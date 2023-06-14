import mongoose from 'mongoose';
import app from './src/app';
import * as dotenv from 'dotenv';
import path from 'path';


dotenv.config({ path: path.resolve(__dirname, '..', '.env') });


const DB = process.env.DATABASE_DEV!.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD!,
);

//connect to db
mongoose
    .connect(DB, {
    }).then(() => {
        console.log('Connected to the database');
    })
        // start server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(` server started on port ${PORT}`);
        })
