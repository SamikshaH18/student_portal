package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="faculty_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Faculty {

	//Facult_id  Fname  Module_Id   email  Gender  Mobile no   Address  Type
	@Id
	@Column(length=10,unique = true)
	@NotNull(message="Faculty ID is mandatory !!")
	private String faculty_Id;
	
	@NotNull(message = "Faculty name should not be NULL...")
	@Length(min = 4, max=20)
	@Column(name ="Faculty_Name" , length = 20)
	private String fName;
	
	@Email
	@Column(name ="Email_ID" , unique = true)
	@Length(min = 4, max=20)
	private String email;
	
	@NotNull(message = "Please specify your gender...")
	@Column( length = 10)
	private String gender;
	
	@NotNull(message = "please give your mmobile number ...")
	@Column(name ="Mobile_No" , length = 10)
	private int mobile_no;
	
	@Column(length = 30)
	@Length(min = 4, max=20)
	private String address;
	
	//Enum
	@Enumerated(EnumType.STRING)
	private facultyType roleFacultyType; 
	
  //moule id remaining
	@OneToOne
	@JoinColumn(name = "module_id", nullable = false)
	private Module moduleId;
	
	
	
}
