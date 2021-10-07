const { Schema, model } = require('mongoose');

const ExerciseSchema = new Schema({
    type:  {
        type: String,
    },

    name: {
        type: String,
    },
    duration: {
        type: Number,
    },
    
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
});

const Exercise = model("Exercise", ExerciseSchema);

module.exports = Exercise;