const { Workout, Exercise } = require('../models');

module.exports = {
  
  getLastWorkout(req, res) {
   Workout.aggregate([ { 
     $addFields: { 
       totalDuration: { 
         $sum: '$exercises.duration'
       }
     }
   }])

      .then((workouts) => {
        console.log(workouts)
        res.json(workouts)})
      .catch((err) => res.status(500).json(err))
    
    },

    createWorkout(req, res) {
      Workout.create(req.body)
        .then((workouts) => res.json(workouts))
        .catch((err) => res.status(500).json(err))
  
    },
  

  addExercise(req, res) {
    Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    ) 
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(500).json(err))

  },

  getWorkoutsInRange(req, res) {
    Workout.aggregate([
      {
        $addFields: {
        totalDuration: {
          $sum: "$exercises.duration"
        }
      }
    },

      {
        $addFields: {
          totalWeight: {
            $sum: "$exercises.weight"
          }
        }
      }

     
  
  ])  
      .sort( { day: -1 } )
      .limit( 7 )
      .then((workouts) => {
        console.log(workouts);
        res.json(workouts)})
      .catch((err) => res.status(500).json(err))
  }
}