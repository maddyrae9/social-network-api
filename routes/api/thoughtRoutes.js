const router = require('express').Router();
const {
    createThought,
    getThought,
    getSingleThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

//API GET all and POST thought
router.route('/').get(getThought).post(CreateThought);

//API thoughts/ GET one thought, PUT and DELETE
router.route('/;thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// API thought POST new Reactions
router.route('/:thoughtId/reactions')
.post(createReaction);

//API thought DELETE reactions by ID
router.route('/:thoughtID/reactions/:reactionId')
.delete(DeleteReaction);

module.exports = router;