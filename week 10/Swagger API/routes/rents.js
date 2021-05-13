import express from 'express';
import * as service from '../service/rent-service.js'

let router = express.Router();

router.get('/rent', function(req, res, next) {
    const allRents = service.getAllMovies();
    res.send(allRents);
});

router.post('/:id/rent', function(req, res, next) {
    let movieId = req.params.id;
    service.createMovieRent(movieId, req.body);
    res.status(200);
});


export default router;