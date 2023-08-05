const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const url =
  "mongodb+srv://Himanshu8266:Hima%401234@cluster1.bzyannv.mongodb.net/medium?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
