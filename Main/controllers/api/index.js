const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const commentsRoutes = require('./commentRoutes')

//localhost:3001/api/users
router.use('/users', userRoutes); 

//localhost:3001/api/

router.use('/projects', projectRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
