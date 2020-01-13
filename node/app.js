const express = require('express')
const bodyParser = require('body-parser')

const app = express()

  module.exports = function(database) {

  app.use(bodyParser.urlencoded({ extended: true }))
  app.set('view engine', 'ejs')

  app.use(express.static('public'))

  app.get('/', async (req, res) => {
    if (req.query.name) {
      database.actors(req.query.name, (err, results) => {
        
        if (err) {
          console.log("Error executing sql", err)
          res.render('index', {results: []})
          return 
        }
        
        res.render('index', {results})
      })
      return 
    }

    res.render('index', {results: []})
  })

  return app
}