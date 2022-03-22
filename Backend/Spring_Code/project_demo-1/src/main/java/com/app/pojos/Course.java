package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="course_tbl")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Course {

	@Id
	@Column(length=10)
	@NotNull(message = "please , give course ID !!")
	private Integer courseId;
	
	@NotNull(message = "Course name should not be NULL...")
	@Length(min = 4, max=20)
	private String course_Name;
	
	@Column(name="Start_date")
	private LocalDate startDate;
	
	@Column(name="End_date")
	private LocalDate endDate;
	
	@Column(name="course_Fees")
	@NotNull(message = "Fees column should not be null!!")
	private double fees;
	
	@Column(name="Total_Marks")
	private int totalMarks;
	
}
