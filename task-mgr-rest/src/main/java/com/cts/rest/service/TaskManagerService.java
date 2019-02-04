package com.cts.rest.service;


import java.util.List;

import org.springframework.dao.DataAccessException;

import com.cts.rest.model.Project;
import com.cts.rest.model.User;

public interface TaskManagerService {
	User saveUser(User user) throws DataAccessException;
	
	//project related changes.
	Project saveProject(Project project) throws DataAccessException;
	List<Project> getProjects() throws DataAccessException;
	List<Project> findProjectsByName(String projectName) throws DataAccessException; 
}
