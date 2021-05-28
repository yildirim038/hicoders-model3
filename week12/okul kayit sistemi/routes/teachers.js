import express from 'express';
var router = express.Router();
import * as service from '../service/teachers-sevice.js'

/* GET teachers listing. */
router.get('/', async function(req, res, next) {
  const allTeachers = await service.getAllTeachers();
  res.send(allTeachers);
});

/** Add a new teachers */
router.post('/', async function(req, res, next) {
  const newTeachers = req.body; 
  const createdTeachers = await service.createTeachers(newTeachers);
  res.status(201).send(createdTeachers);
});

/** get a teacher by id */
router.get('/:id', async function(req, res, next) {
  let teacherId = req.params.id;
  const teacher = await service.getTeachersById(teacherId)
  res.send(teacher);
});


/** delete a Teacher by id */
router.delete('/:id', async function(req, res, next) {
  let teacherId = req.params.id;
  await service.deleteTeachers(teacherId);
  res.status(200).send({});
});

/** update a Teacher by id */
router.put('/:id', async function(req, res, next) {
  let teacherId = req.params.id;
  let teacherToBeUpdated = req.body;
  let updatedTeacher = await service.updateTeacher(teacherId, teacherToBeUpdated);
  res.status(200).send(updatedTeacher);
});

export default router;