// Create a node server that listens on port 3000

// const routes = require('./routes');
require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
const cors = require('cors');
app.use(cors());
app.use(express.json());


//Custom Routes
const router = require('./routes/AuthRoutes');
const blogRoute = require("./routes/blogRoute");
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // limit each IP to 100 requests per windowMs
// });


//setup and connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    //useMongoClient: true,
});
mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error:')
);
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// app.get("/", () => console.log("Hello"));


//add AuthRoutes to the app



app.listen(8080);
// app.use(helmet());

app.use("/admin", router);
app.use("/", blogRoute);
// app.use(limiter);



