const express = require('express')
const app = express()
const port = 5000
const mongodb = require ("./db")
mongodb();

app.use((req,res,next)=>{
  res.setHeader("Acess-Control-Allow-Origin","https://localhost:3000");
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin,X-Request-With,Content-Type,Accept"
  );
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use("/api",require("./Routes/createuser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
