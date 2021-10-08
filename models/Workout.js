const { Schema, model } = require('mongoose');
const exerciseSchema = require('./Exercise.js');


const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        
        exercises: [
            type:  {
                type: String,
            },
        
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            
            weight: {
                
                type: Number,
            },
        
            distance: {
                type: Number,
            },
        
            
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
        ]
    });


const Workout = model('Workout', WorkoutSchema)

module.exports = Workout;