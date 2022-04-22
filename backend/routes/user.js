const {
    signup,
    login,
    logout,
    addNote,
    deleteNote,
    getAllNotes,
    // updateNote
} = require('../controllers/user');

const router = require('express').Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/note').post(addNote)
.delete(deleteNote).get(getAllNotes);


module.exports = router;