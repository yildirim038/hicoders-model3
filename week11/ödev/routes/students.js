import express from 'express';
var router = express.Router();
import * as service from '../service/students_sevice.js'

/* GET Students listing. */
router.get('/', async function(req, res, next) {
  const allStudents = await service.getAllStudents();
  res.send(allStudents);
});

/** Add a new Students */
router.post('/', async function(req, res, next) {
  const newStudents = req.body; 
  const createdStudents = await service.createStudents(newStudents);
  res.status(201).send(createdStudents);
});

/** get a Student by id */
router.get('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  const student = await service.getStudentsById(studentId)
  res.send(student);
});


/** delete a Student by id */
router.delete('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  await service.deleteStudent(studentId);
  res.status(200).send({});
});

/** update a student by id */
router.put('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  let studentToBeUpdated = req.body;
  let updatedStudent = await service.updateStudent(studentId, studentToBeUpdated);
  res.status(200).send(updatedStudent);
});

export default router;