package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="students_tbl")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Student {

	@NotNull(message = "PRN number Can't not be NULL....")
	@Column(name ="PRN_No" , length = 10,unique = true)
	@Id
	private String prnNo;
	
	@NotNull(message = "Roll number should not be NULL...")
	@Column(name ="Roll_No" , length = 10, unique = true)
	private int rollNo;
	
	@NotNull(message = "First name should not be NULL...")
	@Length(min = 4, max=20)
	@Column(name ="First_Name" , length = 20)
	private String firstName;
	
	@NotNull(message = "Last name should not be NULL...")
	@Length(min = 4, max=20)
	@Column(name ="Last_Name" , length = 20)
	private String lastName;
	
	@NotNull(message = "Please specify gender ...")
	@Column(name ="Gender" , length = 10)
	private String gender;
	
	@Email
	@Column(name ="Email_ID" , unique = true)
	@Length(min = 4, max=20)
	private String email;
	
	@NotNull(message = "please give your mobile number ...")
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
	
	@ManyToOne
	@JoinColumn(name = "course_id", nullable = false)
	private Course chosenCourse;
	
	
	//add mentor id 
}
