const jvwt = require("jsonwebtoken");
require("dotenv").config();



function createJwt(email, role) {
    const jwtToken = jwt.sign({email, role}, process.env.SUPERSECRETTJWT) 
    console.log(jwtToken, "JWT TOKEN");
    return jwtToken;
}

module.exports = createJwt;