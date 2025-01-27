const User = require("../models/UserSchema.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = parseInt(process.env.SALTROUNDS);
const createJwt = require("../Utils/createJwt.js")
const createcookie = require("../Utils/createcookie.js")


const authController = {
    login: (async (req, res) => {
        //res.send("login")


        const {email, password } = req.body;

        const user = await User.findOne ({email:email});
        const role = "user";

    
        console.log(user);
        let hashedPassword = user.password;
        const isPassword = await bcrypt.compare(password, hashedPassword);
        console.log(isPassword);
        await createcookie(res, jwtToken)

        if (isPassword) {
            const jwtToken = createJwt(email,role);

        res.cookie("jwt",jwtToken, {
            httpOnly: true,
            maxAge: 1000*60*60*24*5,
            secure: process.env.NODE.ENV === "production"


        });

            res.status(202).send ({msg: "User found!", user:user});
        } else {
            res.status(404).send({msg: "User not found"})
        }
 
    }),


    register: ((req, res) => {
        //res.send("register")
        const { email, password, repeatPassword } = req.body;

        console.log(password, "PASSWORD");
        let role = "user";

        if(password === repeatPassword) {
            bcrypt.hash(password, saltRounds, async function(err, hash){

                if (err) console.log(err, "error");
                
                    const user = new User({
                        email: email,
                        password: hash,
                        role: role
                    });
    
                    console.log(user);
                    user.save();
                    createJwt(email, role);
    
                    res.cookie(jwToken, {
                        httpOnly: true,
                        maxAge: 1000*60*60*24*5,
                        secure: process.env.NODE_ENV === "production"
                    
                    });
    
    
                    res.status(201).send({msg: "successfully signed up", user:user});
            })

        
        }  else {
            res.status(500).send ({msg: "please check your signup"})
        }
        })
};


module.exports = authController;