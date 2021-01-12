const mongoose = require('mongoose')
// const { mongoPath } = require('./config.json')

const mongoPath = 'mongodb+srv://raymond:s3MNTT9oKacrTeO3@raymonds.w37hc.mongodb.net/Defensie?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
  })
  return mongoose
}