const express= require('express');
const app= express();
const port=3000;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const dbUrl= process.env.ATLAS_URL; 
app.use(cors());
main().then(()=>{
    console.log('DB is connected');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}
app.get('/', (req, res)=>{
    res.send('Hello world');
});
app.use(express.json());
app.use('/api', require('./Routes/CreateUser.js'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData.js'));
app.listen(port, ()=>{
    console.log('App is listening on port 3000');
})