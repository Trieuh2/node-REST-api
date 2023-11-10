const mongoose = require('mongoose') // creates a model that allows us to interact with our server in a very easy way

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscribedDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema) // uses the .model() which allows us to directly interact with the DB using this schema