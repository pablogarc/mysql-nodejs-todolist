const express = require("express");
const cors = require("cors");
const registersRoutes = require("./routes/registers.routes")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/", registersRoutes);

app.listen(port, () => {
  console.log(`App is running in port ${port}`);
});
