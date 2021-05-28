import express from 'express';
var router = express.Router();
import * as service from '../service/lecture-sevice.js'

/* GET Lectures listing. */
router.get('/', async function(req, res, next) {
  const allLectures = await service.getAllLectures();
  res.send(allLectures);
});

/** Add a new Lectures */
router.post('/', async function(req, res, next) {
  const newLectures = req.body; 
  const createdLectures = await service.createLectures(newLectures);
  res.status(201).send(createdLectures);
});

/** get a Lecture by id */
router.get('/:id', async function(req, res, next) {
  let lectureId = req.params.id;
  const lecture = await service.getLecturesById(lectureId)
  res.send(lecture);
});


/** delete a Lecture by id */
router.delete('/:id', async function(req, res, next) {
  let lectureId = req.params.id;
  await service.deleteLecture(lectureId);
  res.status(200).send({});
});

/** update a Lecture by id */
router.put('/:id', async function(req, res, next) {
  let lectureId = req.params.id;
  let lectureToBeUpdated = req.body;
  let updatedLecture = await service.updateLecture(lectureId, lectureToBeUpdated);
  res.status(200).send(updatedLecture);
});

export default router;