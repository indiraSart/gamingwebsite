const jwt = require("jsonwebtoken");
require("dotenv").config();



async function createJwt(email, role) {
    const jwtToken = jwt.sign({email, role}, process.env.SUPERSECRETTJWT) 
    console.log(jwtToken, "JWT TOKEN");
    return jwtToken;
}

module.exports = createJwt;