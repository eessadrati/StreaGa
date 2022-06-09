const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressJwt = require('express-jwt');
const userRoute = require('./routes/user');
const dotenv = require('dotenv');
//middlewares
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5003;


app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


//connect to database, btw i used my database 'admin' so you must use your own database to run the code succefully
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Conected")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();

//using routes

app.use('/', userRoute);



//running the node server
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    
        console.log(`server started at port ${PORT}`);
    
})