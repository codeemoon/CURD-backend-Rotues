const cloudinary = require('cloudinary').v2

require('dotenv').config()


async function cloudniaryConfig (){
    try {
    await cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })
    console.log("Cloudinarry connected");
    } catch (error) {
        console.log("Error while configuring CLOUDNIARY");
        console.log(error.message);
    }

}

module.exports = cloudniaryConfig