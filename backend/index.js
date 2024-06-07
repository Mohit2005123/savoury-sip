const express= require('express');
const app= express();
const port=3000;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const dbUrl= process.env.ATLAS_URL;
const PORT= process.env.PORT || 3000; 
app.use(cors());
main().then(()=>{
    console.log('DB is connected');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mohitmongia04:akUHX8jZUBj0RDKE@cluster0.aeufap8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}
app.get('/', (req, res)=>{
    res.send('Hello world');
});
app.use(express.json());
app.use('/api', require('./Routes/CreateUser.js'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData.js'));
app.listen(PORT, ()=>{
    console.log('App is listening on port 3000');
})