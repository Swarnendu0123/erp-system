const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/erpsystem')
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