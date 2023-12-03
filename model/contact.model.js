const mongoose = require("mongoose")


//creating schema

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          
          return /^\d{10}$/.test(value);
        },
        message: 'Invalid phone number format',
      },
    },
  },{
    versionKey:false
});

// creating modal

const contactModal = mongoose.model("contact",contactSchema)

module.exports = contactModal