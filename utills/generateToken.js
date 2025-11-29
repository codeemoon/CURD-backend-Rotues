
const JWT = require('jsonwebtoken')

require('dotenv').config()

async function  generateJWT (payload){
let Token = await JWT.sign(payload , process.env.JWT_SECRET_KEY , )
return Token;
}
async function  verifyJWT (token){
    try {
        let data = await JWT.verify(token , JWT_SECRET_KEY )
        return data;
    } catch (error) {
        return false
       
    }

}

async function decodeJWT (token){
    let decoded = await JWT.decode(token)
    console.log("decoded" , decoded)
    return decoded 
}

module.exports = {generateJWT , verifyJWT , decodeJWT}