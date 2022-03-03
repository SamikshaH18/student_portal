package com.app.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.pojos.Student;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService{

	@Autowired
	private AdminRepository studentRepo;
	@Override
	public Student addOrUpdateStudent(Student s) {
		// TODO Auto-generated method stub
		return studentRepo.save(s);
	}
	
	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return studentRepo.findAll();
	}

	
}
