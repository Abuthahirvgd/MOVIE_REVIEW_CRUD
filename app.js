const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const path=require('path');
require('dotenv').config();

mongoose.connect(process.env.DB_URI);

app.use(cors());

app.use(express.static(path.join(__dirname, 'views')));

const MovieRouter=require('../MovieReview/routes/route');
app.use('/api',MovieRouter);

app.get('/' ,(req,res) => {
    res.sendFile(path.join(__dirname, 'views' , 'index.html'));
});

const PORT=3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});