const express = require("express");
const mongoose = require("mongoose");

const route = require("./routes/route");

let app = express();

app.use(express.json());
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://Adesh:LnDEhxK0maoDwQD9@cluster0.r3pzigx.mongodb.net/jaiKisanKHOMU",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("mongoDB is Connected"))
  .catch((err) => err);

app.use("/", route);

app.listen(process.env.PORT || 3000, () => {
  console.log("Express is Connected to Port--->", process.env.PORT || 3000);
});
