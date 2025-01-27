const jwt = require("jsonwebtoken");
require("dotenv").config();
const user = require("../models/UserSchema.js");



async function verifyJwt(req, res, send) {
    const jsonWebToken = req.cookie.jwt;

    console.log(req, "COOKIES");

    await jwt.verify(jsonWebToken, porcess.env.SUPERSECRETTJWT, (async (err,decoded) => {
        if (err) {
            console.log(err);
            res.status(401).send({msg:"user not authenticated"});
            return;
        }

        console.log(decoded);
        let email = decoded.email;
        req.user = decoded;
        const user = await User.findOne({email});

        try {
            const user = await User.findOne({email});
            console.log(user, "USER")

            req.user.id = user._id;

        } catch (error) {
            console.log(error);
            res.status(404).send({msg:"User not found"})
            return;
            
        }

    })).then(() => {
        next();
    })
    
};


module.exports = verifyJwt;