"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");

app.use("/cat", catRoute);
app.use("/user", userRoute);
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
