const mongoose = requeire ('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema ({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = model('user', userSchema);

module.exports = user;