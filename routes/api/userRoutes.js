const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
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