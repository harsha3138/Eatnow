const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://harsha3138:Harshass%40123@cluster0.jpmxgxj.mongodb.net/eatnow?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

module.exports = mongoDB;
