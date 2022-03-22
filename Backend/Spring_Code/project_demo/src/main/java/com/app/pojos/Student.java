package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="students")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Student {

	@NotNull(message = "PRN number should not be NULL....")
	@Column(name ="PRN_No" , length = 10,unique = true)
	
	private int prnNo;
	
	@NotNull(message = "Roll number should not be NULL...")
	@Column(name ="Roll_No" , length = 10, unique = true)
	private int rollNo;
	
	@NotNull(message = "Student name should not be NULL...")
	@Length(min = 4, max=20)
	@Column(name ="Student_Name" , length = 20)
	private String studentName;
	
	@NotNull(message = "Please specify gender ...")
	@Column(name ="Gender" , length = 10)
	private String gender;
	
	@Email
	@Column(name ="Email_ID" , unique = true)
	@Length(min = 4, max=20)
	private String email;
	
	@NotNull(message = "please give your mmobile number ...")
	@Column(name ="Mobile_No" , length = 10)
	private int mobileNo;
	
	@Column(length = 30)
	@Length(min = 4, max=20)
	private String Address;
	
	@Column( length = 10)
	private LocalDate birthDate;
	
	@NotNull(message = "please give your parent's mmobile number ...")
	@Column( length = 10)
	private int Parent_Mobile;
	
	@NotNull(message = "Adhar number field should not be empty ...")
	@Column(length = 12, unique = true)
	private int Adhar_no;
	
	@Transient
	@Enumerated(EnumType.STRING)
	private UserRole role;

	
	
}
