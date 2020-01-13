const database = require('./database')
const app = require('./app')(database)  

app.listen(3000, () => {
  console.log("😎")
})

