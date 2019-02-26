package com.cts.rest.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity()
@Table(name = "TASK")
public class Task implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = "task_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer taskId;

	@Column(name = "task_name")
	private String taskName;

	@Column(name = "priority")
	private String priority;

	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, optional = true)
	@JoinColumn(name = "parent_id", nullable = true)
//	@JsonBackReference
	private Task parentTask;

	@Column(name = "start_Date")
//	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
//	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate startDate;

	@Column(name = "end_date")
//	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
//	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate endDate;

	@Column(name = "edit_enabled")
	private String editEnabled;
	
	@ManyToOne(fetch=FetchType.LAZY,optional=true)
	@JoinColumn(name="user_id",nullable=true)
	private User user;
	
	@ManyToOne(fetch=FetchType.LAZY,optional=true)
	@JoinColumn(name="project_id",nullable=true)
	private Project project;
	
	public Integer getTaskId() {
		return taskId;
	}

	public void setTaskId(Integer taskId) {
		this.taskId = taskId;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	
	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public String getEditEnabled() {
		return editEnabled;
	}

	public void setEditEnabled(String editEnabled) {
		this.editEnabled = editEnabled;
	}

	public Task getParentTask() {
		return parentTask;
	}

	public void setParentTask(Task parentTask) {
		this.parentTask = parentTask;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	
	
}
