package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="user_tbl")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

	@Id
	@Column(name="ID",length = 10)
	@NotNull(message="Id should not be null !!")
	private Integer id;
	
	@Column(length = 10,unique = true)
	@NotNull(message="Login Id should not be null !!")
	private String loginId;
	
	@Column(length = 10)
	@NotNull(message="Password should not be null !!")
	private String password;

	@Column(length = 10)
	@NotNull(message="confrm Password should not be null !!")
	@Transient
	private String confirmPwd;
	
	@Enumerated(EnumType.STRING)
	@Column(name="User_Role")
	private UserRole role;
	
}
