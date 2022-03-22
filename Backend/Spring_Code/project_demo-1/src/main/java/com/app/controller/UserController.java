package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Student;
import com.app.pojos.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
public class UserController {

//	@Autowired
//	private IUserService userService;
//	@PostMapping("/login") // @RequestMapping + method=POST
//	public User processLoginForm(@RequestBody String id,String password) {
//		System.out.println("in process login form " + id + " " + password );
//			User user = userService.authenticateUser(id, password);// in case of success : DETACHED pojo
//			return user;?/==
	
//}
}
