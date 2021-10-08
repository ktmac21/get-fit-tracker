const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
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
});



module.exports = exerciseSchema;