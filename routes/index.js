const router = require('express').Router();

//Import API routes from index.js
const apiRoutes = require('./api');

//Add prefix to API routes
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;