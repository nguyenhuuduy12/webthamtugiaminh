const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');
const app = express();
const User = require('./model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const jwtSecret = 'esqwqrwqdssjdkfu3223211fsfds';
const bcryptSalt = bcrypt.genSaltSync(10)

app.use(cors(
    {
        Credentials: true,
        origin: 'http://localhost:5173',
    }
));
app.use(express.json())
app.use(cookieParser())


mongoose.connect('mongodb+srv://donluy123:wqnQzF1Dn8wgohwt@cluster0.mr69yqa.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const userDoc = await User.create({
            username, email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc)
    } catch (e) {
        res.status(422).json(e)
    }


});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email })
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            jwt.sign({ email: userDoc.email, id: userDoc._id }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(442).json('pass not ok')
        }
    } else {
        res.json('user not found');
    }
});
app.get('/admin', (req, res) => {
    res.json(req.cookies)
})
app.listen(4000);
// WEUDdRrG0NrGrU1k
