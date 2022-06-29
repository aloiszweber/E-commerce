const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DB_REMOTE.replace("<PASSWORD>", process.env.DB_PASS);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("DB connection successful");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
