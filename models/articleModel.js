const mongoes = require('mongoose');

const articlschma = new mongoes.Schema({
    title: {
      type: String,
      required: true

    },
    content: {
        type: String,
        required: true

    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoes.model('articl',articlschma);