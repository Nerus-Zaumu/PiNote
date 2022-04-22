require('express-async-errors')
const  bcrypt = require('bcryptjs');

const {User, Note} = require('../models/user');
let genId;

const signup = async (req, res) => {
    if(await User.exists({email: req.body.email})){
        res.status(404).json({msg: `User with email ${req.body.email} already exists!`})
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const userCredentials = {
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword
    }
    const newUser = User.create(userCredentials)
    res.status(200).json({msg: 'New user created'})
}

const login = async (req, res) => {
    const {email, password} = req.body
    const registeredUser = await User.findOne({email: email})
    if(!registeredUser){
       return res.json({payload: 'User not found'});
    }
    req.query.id = registeredUser._id;
    genId = req.query.id
    const isMatch = await bcrypt.compare(password, registeredUser.password)
    if(!isMatch){
     return res.status(200).send('Wrong password')
    }
     res.json({msg: 'Successful Login', payload: registeredUser})
}

const logout = async (req, res) => {
    res.redirect('/login')
}

const addNote = async (req, res) => {
    User.findOne({_id: genId}).populate('Notes').exec(function (err, note){
        if(err){
            return err.message;
        }
        const newNote = {
            title: req.body.title,
            content: req.body.content
        }
        Note.create(newNote)
        res.status(200).send('New note created!')
    })
}

const deleteNote = async (req, res) => {
    const temp = Note.findOne({title: req.body.title})
    Note.deleteOne({_id: temp._id})
}

const getAllNotes = async (req, res) => {
    const notes = Note.find();
    res.status(201).json({msg: 'All notes pulled', payload: notes})
}

// const updateNote = async (req, res) => {
    
// }

module.exports = {
    signup,
    login, 
    logout,
    addNote,
    deleteNote,
    getAllNotes,
    // updateNote
}