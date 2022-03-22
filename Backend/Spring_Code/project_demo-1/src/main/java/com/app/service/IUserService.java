package com.app.service;

import com.app.pojos.Student;
import com.app.pojos.User;

public interface IUserService {

	User authenticateUser(String loginId , String password);
}
