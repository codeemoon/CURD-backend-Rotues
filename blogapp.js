const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");
const  cloudniaryConfig  = require("./config/cloudnaryconfig");
require('dotenv').config()

const PORT = process.env.PORT

app.use(express.json());
app.use(cors({origin : 5173}));

app.use("/api/v1", userRoute);
app.use("/api/v1", blogRoute);

app.listen(PORT, () => {
  console.log("Server activated");
  dbConnect();
  cloudniaryConfig()
});
