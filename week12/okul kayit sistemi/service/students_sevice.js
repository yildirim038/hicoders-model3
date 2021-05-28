import * as studentRepository from './persistency/students-repository.js';

export async function createStudent(pStudent){
    return await studentRepository.create(pStudent);
}

export async function deleteStudent(pId){
    return await studentRepository.remove(pId);
}

export async function getAllStudent(){
    return await studentRepository.getAll();
}

export async function getStudentById(pId){
    let student = await studentRepository.findById(pId)
    return student;
}

export async function updateStudent(pId, pUpdateStudent){
    let student = await studentRepository.updateMovie(pId, pUpdateStudent);
    return student;
}
