package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="assignment_tbl")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Assignment {

	@Id
	@NotNull(message = "Assign ID should not be NULL....")
	@Column(name ="assign_id" , length = 10,unique = true)
	private int assignId;
	
	@OneToOne
	@JoinColumn(name = "module_id", nullable = false)
	private Module moduleId;
	
	@OneToOne
	@JoinColumn(name = "faculty_id", nullable = false)
	private Module facultyId;
	
	@Column( length = 10)
	@NotNull(message = "Assigned date should not be NULL....")
	private LocalDate assignDate;
	
	@Column( length = 10)
	@NotNull(message = "Due date should not be NULL....")
	private LocalDate dueDate;
	
	//assigned file field give
	
	private String status;
	
	
}
