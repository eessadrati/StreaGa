const cloudinary = require("cloudinary").v2;

/**cloudinary.config({
  cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret:`${ process.env.CLOUDINARY_API_SECRET}`,
});*/
cloudinary.config({
  cloud_name: "dvjybksi3",
  api_key: "968165244341661",
  api_secret: "qu4oS6RWlKnPdtRd2k5Ttn6s0MI",
}); 

module.exports = cloudinary;
