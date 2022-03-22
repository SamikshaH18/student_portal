package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Student;
import com.app.service.AdminServiceImpl;
import com.app.service.IAdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired 
	private AdminServiceImpl adminSevice;
	
	public AdminController() {
	     System.out.println("In const of "+ getClass());
	}
	@GetMapping("/addStudent")
	public Student addStudentDetails(@RequestBody @Valid Student s)
	{
		System.out.println("In add student "+s);
		return adminSevice.addOrUpdateStudent(s);
	}
}
