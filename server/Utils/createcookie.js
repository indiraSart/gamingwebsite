require("dotenv").config();

function createcookie(res,jwtToken) {
    res.cookie(jwtToken, {
    httpOnly: true,
    maxAge: 1000*60*60*24*5,
    secure: process.env.NODE_ENV === "production"

});
}

module.exports = createcookie;
