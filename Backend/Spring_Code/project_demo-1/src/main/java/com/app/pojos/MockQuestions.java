package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="mockQuestions_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MockQuestions {

	@Id
	@Column(name = "Question_no",length=20, unique = true)
	private int qustNo;
	
	@ManyToOne
	@JoinColumn(name = "module_id", nullable = false)
	@NotNull(message="Module ID cannot null !!")
	private Module moduleId;
	
	@Column(length=100)
	private String question;
	
	private int opt1;
	private int opt2;
	private int opt3;
	private int opt4;
	
	private int ans;
	
	@Column(name="mark",length=20)
	private int marksForEachQuestion;
}
