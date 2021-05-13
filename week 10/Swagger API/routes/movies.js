import express from 'express';
import * as service from '../service/movie-service.js'

let router = express.Router();

/* Filmleri listesi getirir. */
router.get('/', function(req, res, next) {
  const allMovies = service.getAllMovies();
  res.send(allMovies);
});

/** Yeni Film ekleme */
router.post('/', function(req, res, next) {
  const newMovie = req.body; 
  service.createMovie(newMovie);
  res.status(201).send();
});

/** Id ile film getirme */
router.get('/:id', function(req, res, next) {
  let movieId = req.params.id;
  const movie = service.getMovieById(movieId)
  res.send(movie);
});


/** Filmleri silme */
router.delete('/:id', function(req, res, next) {
  let movieId = req.params.id;
  service.deleteMovie(movieId);
  res.status(200);
});

/** Filmi yeniden düzenleme */
router.put('/:id', function(req, res, next) {
  let movieId = req.params.id;
  let updatedMovie = req.body;
  service.updateMovie(movieId, updatedMovie);
  res.status(200);
});

export default router;