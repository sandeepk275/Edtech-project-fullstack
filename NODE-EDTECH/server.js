const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const cors=require('cors');
const dotenv=require('dotenv');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
// const PORT = 8080;
const PORT = process.env.PORT;

const corsoptions={
    origin: "http://localhost:3000"
}
app.use(cors(corsoptions));


db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to Database");
    }).catch((err) => {
        console.log("not connected to Database", err);
        process.exit();
    })



app.get('/', (req, res) => {
    res.json({ message: "Welcome to Upgrad InSession application development." });
})

require('./routes/user.routes')(express,app);
require('./routes/tutorial.routes')(express, app);


app.listen(PORT, () => {
    console.log(`server start listening to  port ${PORT}`);
});
