package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.UserRepository;
import com.app.pojos.Student;
import com.app.pojos.User;

public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;
	@Override
	public User authenticateUser(String loginId, String password) 
	{
		return userRepo.findByLoginIdAndPassword(loginId,password).orElseThrow(()-> new RuntimeException("User login Failed...!!"));

	}
//	@Override
//	public Student authenticateUser(Integer loginId, String password) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	
	
}
