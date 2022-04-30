const {
    signup,
    login,
    logout,
    addNote,
    deleteNote,
    getAllNotes,
    // updateNote
} = require('../controllers/user');

const authenticator = require('../middlewares/authentication.js');

const router = require('express').Router();

router.use('/dashboard', authenticator);

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/note', authenticator).post(addNote)
.delete(deleteNote).get(getAllNotes);


module.exports = router;