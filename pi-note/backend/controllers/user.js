require('express-async-errors')
const  bcrypt = require('bcryptjs');

const {User, Note} = require('../models/user');

const signup = async (req, res) => {
    //Signup Here
}

const login = async (req, res) => {
    //Signup Here
}

const logout = async (req, res) => {
    //Signup Here
}

const addNote = async (req, res) => {
    //Signup Here
}

const deleteNote = async (req, res) => {
    //Signup Here
}

const getAllNotes = async (req, res) => {
    //Signup Here
}

const updateNote = async (req, res) => {
    //Signup Here
}

module.exports = {
    signup,
    login, 
    logout,
    addNote,
    deleteNote,
    getAllNotes,
    updateNote
}