package com.cts.rest.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.cts.rest.model.Project;
import com.cts.rest.model.Task;
//import com.cts.rest.model.ParentTask;
import com.cts.rest.model.User;
import com.cts.rest.repositories.ProjectRepository;
import com.cts.rest.repositories.TaskRepository;
//import com.cts.rest.repositories.ParentTaskRepository;
//import com.cts.rest.repositories.TaskRepository;
import com.cts.rest.repositories.UserRepository;

public class TaskManagerServiceImpl implements TaskManagerService {
	public static final Logger LOGGER = LoggerFactory.getLogger(TaskManagerService.class);

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProjectRepository projectRepository;
	
	@Autowired
	private TaskRepository taskRepository;

	@Override
	public User saveUser(User user) throws DataAccessException {
		LOGGER.info("saveUser Start");
		User returnUser = userRepository.save(user);
		LOGGER.info("saveUser End");
		return returnUser;
	}
	
	public List<User> getUsers() throws DataAccessException {
		return userRepository.findAll();
	}

	@Override
	public List<User> findUsersByName(String name) throws DataAccessException {
		return userRepository.findByName(name);
	}


	@Override
	public Project saveProject(Project project) throws DataAccessException {
		return projectRepository.save(project);
	}

	@Override
	public List<Project> getProjects() throws DataAccessException {
		return projectRepository.findAll();
	}

	@Override
	public List<Project> findProjectsByName(String projectName) throws DataAccessException {
		return projectRepository.findProjectsByName(projectName);
	}

	@Override
	public Task saveTask(Task task) throws DataAccessException {
		return taskRepository.save(task);
	}

	
}
