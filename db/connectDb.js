const mongoose = require("mongoose");

const DATABASE_URL = `mongodb+srv://gokilamaibalan64:Gokila%400318@cluster0.8rubk8j.mongodb.net/short`;
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established.");
  })
  .catch((err) => {
    console.log("DB connection error: ", err);
  });
