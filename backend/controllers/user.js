require('express-async-errors')
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {User, Note} = require('../models/user');
const { options } = require('../routes/user');
let refId;

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
    res.status(200).json({msg: 'New user created', payload: newUser})
}

const login = async (req, res) => {
    const {email, password} = req.body;
    const registeredUser = await User.findOne({email: email})
    if(!registeredUser){
       return res.status(404).json({payload: 'User not found'});
    }
    req.params.id = registeredUser._id;
    refId = req.params.id
    const isMatch = await bcrypt.compare(password, registeredUser.password)
    if(!isMatch){
     return res.status(200).send('Wrong password');
    }
    const token = jwt.sign(
      {user_id: registeredUser._id},
      process.env.TOKEN_KEY,
      {expiresIn: "24h",}
    )
    registeredUser.token = token;
     res.json({msg: 'Successful Login', payload: registeredUser})
}


const logout = async (req, res) => {
    res.redirect('/login')
}

const addNote = async (req, res) => {
        const newNote = {
            title: req.body.title,
            content: req.body.content,
            user: refId
        }
        Note.create(newNote)
        res.status(200).json({msg: 'New note created!', payload: newNote})
}

const deleteNote = async (req, res) => {
    const temp = Note.findOne({title: req.body.title})
    req.params.id = refId
    Note.deleteOne({_id: temp._id})
}

const getAllNotes = async (req, res) => {
    const userNotes = await Note.find({user: refId});
    res.status(201).json({msg: 'All notes pulled', payload: userNotes})
}


module.exports = {
    signup,
    login, 
    logout,
    addNote,
    deleteNote,
    getAllNotes,
}