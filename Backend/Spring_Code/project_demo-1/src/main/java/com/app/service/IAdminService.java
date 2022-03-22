package com.app.service;

import java.util.List;

import com.app.pojos.Student;

public interface IAdminService {
	Student addOrUpdateStudent(Student s); 

	List<Student> getAllStudents();
}
