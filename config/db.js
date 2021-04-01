const mongoose =require('mongoose');


const connectDb =async ()=>{
  const cnn =await mongoose.connect(process.env.Mongo_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`Mongo connected ${cnn.connection.host}`.cyan.underline.bold);
  console.log(process.env.MONGO_URL);
};
module.exports = connectDb;
