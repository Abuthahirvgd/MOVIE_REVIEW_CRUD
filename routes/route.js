const express=require('express');
const router=express.Router();
const Movie=require('../models/schema');

const bodyParser=require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

// get end point to retrieve all review,sorted by data in descending order
router.get('/review',async(req,res) => {
    try {
        const reviews=await Movie.find().sort({date:-1});
        res.json(reviews); // send the blogs as a JSON response
    } catch(error){
        res.status(500).json({message:error.message});
    }
});

// POST end point to create a new blog
router.post('/review',async(req,res)=>{
    const moviereview=new Movie({
        name:req.body.name,
        url:req.body.url,
        rate:req.body.rate,
        review:req.body.review
    });

    try {
        const newreview=await moviereview.save(); // save the new review in the database
        res.status(201).json(newreview); // send the created review as a json response
    } catch(error){
        res.status(400).json({message:error.message}); // if an error occur,send a 400 response
    }
});

// PUT endpoint to update an existing review by id
router.put('/review/:id',async(req,res)=>{
    try {
        const updatedReview=await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedReview); 
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

//DELETE endpoint to delete an existing review by id
router.delete('/review/:id',async(req,res)=>{
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({message: 'Review deleted'});
    } catch(error){
        res.status(500).json({message:error.message});
    }
});
module.exports=router;