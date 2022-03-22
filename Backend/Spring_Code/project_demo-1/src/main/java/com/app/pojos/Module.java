package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="module_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Module {

	@Id
	@NotNull(message="Module ID should not be NULL !!")
	@Column
	private Integer module_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "course_id", nullable = false)
	private Course course_id;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "faculty_id", nullable = false)
	private Faculty faculty_id;          //review
	
	@NotNull(message="Module name should not be NULL !!")
	@Column(name="Module_Name")
	private String moduleName;
	
	@NotNull(message="end module marks should not be NULL !!")
	@Column(name= "End_Module_Marks")
	private int endModuleMarks;
	
	@NotNull(message="CCEE Marks should not be NULL !!")
	@Column(name="CCEE_Marks")
	private int CCEEMarks;
	
}
