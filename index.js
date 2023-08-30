const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors');
require("dotenv").config()
const authRoutes = require("./routes/auth")
const app = express()
app.use(cors());

const PORT = process.env.PORT || 4050
const uri = process.env.DB_CONNECT
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message)
  })

app.use(express.json())
app.use("/auth", authRoutes)
app.get("/", (req, res) => {
  res.send(`<h1>Hey, it's working!! trying to write html </h1>,<br>
  <h2>hello </h2>`)
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
