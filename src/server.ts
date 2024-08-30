import express from 'express'
import router from "./routes/routergroups";
import mongoose from 'mongoose';

const app = express()

mongoose
.connect('mongodb://localhost:27017')
.then(() => {
    console.log("Database connected successfully.");
    app.listen(3001, () => {
        console.log(`Server is running on port : ${3001} `);
    });
})
.catch((error) => console.log(error));

app.use(router)
