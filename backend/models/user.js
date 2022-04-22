const mongoose = require('mongoose');
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: validator.isEmail,
            message: 'Please enter a valid email',
            isAsync: false
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password cannot be shorter than 8 characters']
    },
    notes: [{
        type: Schema.Types.ObjectId, 
        ref: 'Notes'
    }]
})

const noteSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: [true, 'Every note requires a title']
    },
    content: {
        type: String,
    }
})

const User = mongoose.model('Users', userSchema)
const Note = mongoose.model('Notes', noteSchema)

module.exports = {
    User,
    Note
}