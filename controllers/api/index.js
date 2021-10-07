const router = require('express').Router();
const exercisesRoutes = ('./exerciseRoutes');
const workoutRoutes = require('./workoutRoutes');
const rangeRoutes = require('./workoutRoutes')

router.use('/', workoutRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/range', rangeRoutes);


module.exports = router;