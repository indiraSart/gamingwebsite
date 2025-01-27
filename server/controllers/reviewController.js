const User = require("../models/UserSchema.js");
const game = require("../models/GameSchema.js")
const Review = require("../models/RewiewSchema.js");
const { MongoTopologyClosedError } = require("mongodb");


const reviewController = {

    createReview: (async () => {
        const {gameId} = req.params;
        const {comment, recommended,  stars} = req.body;
        try {
            const email = req.user.email;
    
            console.log(req.body);
           // const user = await user.findeOne({email});
            //console.log(user, "USER ID");
    
            let userId = user._id;
    
            const Review = await Review.create({
                user: userId,
                game: gameId,
                comment: comment,
                recommended: recommended,
                starts: starts
            })
    
    
            if(review) {
                const updateGame = await game.findByIdUpdate(gameId, {$push:{review: review._id } })
                 res.status(201).send({msg:"Review succesfully created"}) 
            } else {
                res.status(500).send({msg:"Something bad happend"})
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).send({msg:"intenal server"});

        }

    }),

    getReviewsByGame: (async (req,res) => {
        const {id} = req.params;
        try {
    
            const reviews = await Review.find({game: id});
            
            if (reviews) {
                res.status(200).send({msg:"reviews found", reviews:reviews});
            } else {
                res.status(404).send({msg:"no reviews found", reviews: undefined})
    
            }

        } catch (error) {
            console.log(error);
            res.status(500).send({msg:"intenal server"});
            
        }

        
    }),


    getReviewsByUser: (async (req, res) => { const {id} = req.params;

    try {
        const reviews = await Review.find({user: id});
        
        if (reviews) {
            res.status(200).send({msg:"reviews found", reviews:reviews});
        } else {
            res.status(404).send({msg:"no reviews found", reviews: undefined})
        }
    
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:"intenal server"});

        
    }




    }),


    getReview: (async (req, res) => {
        const {id} = req.params;
    
        try {
            
            const review = await Review.findById(id);
    
            if (review) {
                res.status(200).send({msg:"found review", review:review})
            } else {
                res.status(404).send({msg:" review not found", review:review})
    
            }

        } catch (error) {
            console.log(error);
            res.status(500).send({msg:"intenal server"});

        }

        

    }),
    deleteReview: (async (req, res) => {


    }),






}

module.exports = reviewController;

