const express = require('express')
const app = express()
const port = 3000

let movies=[
    {
        "id": 10002,
        "name": "die hard",
        "year": "1999",
        "genre": "action",
        "income": 10000000
      },
      {
        "id": 10003,
        "name": "Wall-e",
        "year": "2007",
        "genre": "animastion",
        "income": 2000000
      }
];

let rentMovies=[
    {
        "movieId": 10002,
        "duration": 10,
        "person": "Hi Coders"
     }
];

app.get('/movies/', function(req, res, next) {
    let newArray = JSON.parse(JSON.stringify(movies))
    let movieList = newArray.reverse().filter( (o, i) => i<20)
    res.json(movieList);
  });

  app.get('/movies/:id/', function(req, res, next) {
    let newArray = JSON.parse(JSON.stringify(movies))
    let movieList = newArray.reverse().filter( (movie) => req.params.id==movie.id)
    res.json(movieList);
  });

  
  app.post('/movies/', function(req, res, next) {
    movies.push(req.body)
    res.sendStatus(200);
  });
  
  app.delete('/movies/:id/', function(req, res, next) {
    movies.splice(req.params.id)
    res.sendStatus(200);
  });

  app.put('/movies/:id/', function(req, res, next) {
    movies.splice(req.params.id)
    movies.push(req.body)
    res.sendStatus(200);
  });

  app.get('/rent/', function(req, res, next) {
    let newArray = JSON.parse(JSON.stringify(rentMovies))
    let movieRentList = newArray.reverse().filter( (o, i) => i<20)
    res.json(movieRentList);
  });

  app.post('/rent/', function(req, res, next) {
    rentMovies.push(req.body)
    res.sendStatus(200);
  });

  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
