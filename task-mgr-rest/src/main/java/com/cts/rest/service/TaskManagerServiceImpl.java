package com.cts.rest.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

//import com.cts.rest.model.ParentTask;
import com.cts.rest.model.Task;
import com.cts.rest.model.User;
//import com.cts.rest.repositories.ParentTaskRepository;
import com.cts.rest.repositories.TaskRepository;

public class TaskManagerServiceImpl implements TaskManagerService{
	public static final Logger LOGGER = LoggerFactory.getLogger(TaskManagerService.class);
	
	@Autowired
	private TaskRepository taskRepository;

	public User saveUser(User user) throws DataAccessException {
		return null;
	}
	



}
