const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const blogsRoute = require('./routes/blogs');


dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
});

// Middlewares
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }));
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());
app.use("/blog", blogsRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
