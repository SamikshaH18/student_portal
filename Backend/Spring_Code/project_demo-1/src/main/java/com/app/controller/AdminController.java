package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Student;
import com.app.service.AdminServiceImpl;
import com.app.service.IAdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired 
	private AdminServiceImpl adminSevice;
	
	public AdminController() {
	     System.out.println("In const of "+ getClass());
	}
	@PostMapping("/addstudent")
	public Student addStudentDetails(@RequestBody Student s)
	{
		System.out.println("In add student "+s);
		return adminSevice.addOrUpdateStudent(s);
	}
	@GetMapping("/getStudent")
	public List<Student> getAllStudentDetails()
	{
		List<Student> S= adminSevice.getAllStudents();
		return S;
	}
}
