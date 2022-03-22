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
@Table(name="mockTest_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MockTest {
	@Id
	@Column(name="Mock_Id",length=10,unique = true)
	private int mockId;
	
	@ManyToOne
	@JoinColumn(name = "module_id", nullable = false)
	@NotNull(message="Module ID cannot null !!")
	private Module moduleId;
	
	@Column(name="Total_Marks",length=20)
	private int totalMarks;

}
