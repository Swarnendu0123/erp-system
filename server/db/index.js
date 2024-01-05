const { MONGODB_URL} = require("../env")
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URL)
    .then(
        () => {
            console.log("Connected to MongoDB");
        }).catch((err) => {
            console.log("Error connecting to MongoDB", err);
        });


const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model('User', UserSchema);


module.exports = {
    User,
}