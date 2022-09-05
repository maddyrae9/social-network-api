const router = require('express').Router();
const {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    addFriend,
    deleteFriend,
    deleteUser
} = require('../../controllers/userController');

//API GET ALL and POST
router.route('/').get(getUser).post(createUser);

//API GET one user, PUT AND DELETE a friend by ID
router.route('/:userID')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

//API POST and DELETE a friend by ID
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;