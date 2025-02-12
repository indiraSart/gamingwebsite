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

        try {       
            const user = await User.findOne ({email:email});
            const role = "user";
            console.log(user);
            let hashedPassword = user.password;
            const isPassword = await bcrypt.compare(password, hashedPassword);
            console.log(isPassword);
            
            if (isPassword) {
                const jwtToken = await createJwt(email,role);
                
                await createcookie(res, jwtToken);
            // res.cookie("jwt",jwtToken, {
            //     httpOnly: true,
            //     maxAge: 1000*60*60*24*5,
            //     secure: process.env.NODE.ENV === "production"
    
    
            // });
    
                res.status(202).send ({msg: "User found!", user:user});
            } else {
                res.status(404).send({msg: "User not found"})
            }
            
        } catch (error) {
            console.log("error", error);
        }
    
 
 
    }),
    register: ((req, res) => {
        console.log("register");
        //res.send("register")
        const { email, password, repeatPassword } = req.body;

        try {
            console.log("REGISTER", req.body);

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
                        const jwtToken = await createJwt(email, role);
                        createcookie(res, jwtToken)
        
                     
        
        
                        res.status(201).send({msg: "successfully signed up", user:user});
                })
            
            }  else {
                res.status(500).send ({msg: "please check your signup"})
            }
        } catch (error) {
            console.log("error", error)
        }


     

        }),
    user:(async (req, res) => {
        console.log(req.user, "USER");
        let email = req.user.email;
        try {
            const user = await User.findOne({email})
            if(user) {
                res.status(200).send({msg: "user not found", user:user})
            }
            
        } catch (error) {
            console.log(error, "error")
            res.status(500).send ({msg: "bad request", error:error})
            
        }
    })
};


module.exports = authController;