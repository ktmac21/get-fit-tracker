const router = require('express').Router();
const { Workout, Exercise } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const lastWorkout = await Workout.find().slice({ _id: -1 });
    
    res.status(200).json(lastWorkout);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/', async (req, res) => {
  try {
    const addExercise = await Workout.findOneAndUpdate(
      { _id: req.params.workoutId },
      { $set: req.body }
    )
    res.status(200).json(addExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/', async (req, res) => {
  try {
    const sevenWorkouts = await Workout.find().slice({ _id: -7 });
    res.status(200).json(sevenWorkouts);
  } catch (err) {
    res.status(400).json(err)
  }
});