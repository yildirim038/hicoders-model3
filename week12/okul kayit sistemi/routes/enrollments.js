import express from 'express';
var router = express.Router();
import * as service from '../service/enrollment-sevice.js'

/* GET Enrollments listing. */
router.get('/', async function(req, res, next) {
  const allEnrollments = await service.getAllEnrollments();
  res.send(allEnrollments);
});

/** Add a new Enrollments */
router.post('/', async function(req, res, next) {
  const newEnrollments = req.body; 
  const createdEnrollments = await service.createEnrollments(newEnrollments);
  res.status(201).send(createdEnrollments);
});

/** get a Enrollment by id */
router.get('/:id', async function(req, res, next) {
  let enrollmentId = req.params.id;
  const enrollment = await service.getEnrollmentById(enrollmentId)
  res.send(enrollment);
});


/** delete a Enrollment by id */
router.delete('/:id', async function(req, res, next) {
  let enrollmentId = req.params.id;
  await service.deleteEnrollment(enrollmentId);
  res.status(200).send({});
});

/** update a Enrollment by id */
router.put('/:id', async function(req, res, next) {
  let enrollmentId = req.params.id;
  let enrollmentToBeUpdated = req.body;
  let updatedEnrollment = await service.updateEnrollment(enrollmentId, enrollmentToBeUpdated);
  res.status(200).send(updatedEnrollment);
});

export default router;