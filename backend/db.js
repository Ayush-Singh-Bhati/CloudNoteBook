const mongoose = require('mongoose');

const mongoURI = 'mongodb://0.0.0.0:27017/inotebook?directConnection=true&tls=false&readPreference=primaryPreferred';

const connectToMongo = () => {
    mongoose.connect(mongoURI);
    console.log('Connected to Mongoos successfully')
}


// async function connectToMongo() {
//     try {
//       await mongoose.connect(mongoURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('Connected to Mongoos successfully');
//     } catch (error) {
//       console.error('Error connecting to MongoDB:', error);
//     }
//   }

module.exports = connectToMongo;