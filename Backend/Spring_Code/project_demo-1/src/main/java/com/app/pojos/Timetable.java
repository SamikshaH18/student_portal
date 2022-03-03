package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

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
@Table(name="timetable_tbl")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Timetable {

	@Id
	@NotNull(message = "ID should not be NULL....")
	@Column( length = 10,unique = true)
	private int id;
	
	@Column( length = 10)
	@NotNull(message = "date should not be NULL....")
	private LocalDate date;
	
	@Column(name="From_Time")
	@NotNull(message = "please secify the starting time of lect/lab")
	private LocalDateTime fromTime;
	
	@Column(name="To_Time")
	@NotNull(message = "please secify the ending time of lect/lab")
	private LocalDateTime toTime;
	
	@OneToOne
	@JoinColumn(name = "module_id", nullable = false)
	private Module moduleId;
	
	@OneToOne
	@JoinColumn(name = "faculty_id", nullable = false)
	private Module facultyId;
	
	@NotNull(message = "please give whether it is lect/lab")
	private String type;
	
	//give meeting link
	
	
}
