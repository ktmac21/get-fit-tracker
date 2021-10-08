const router = require('express').Router();
const {
  getLastWorkout,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
} = require('../../controllers/workoutController');

// /api/workouts
router.route('/').get(getLastWorkout);
router.route('/').post(createWorkout);

// /api/workouts/:id

router.route('/:id').put(addExercise);

// /api/workouts/range
router.route('/range').get(getWorkoutsInRange);


module.exports = router;