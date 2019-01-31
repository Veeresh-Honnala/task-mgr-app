package com.cts.rest.service;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

//import com.cts.rest.model.ParentTask;
import com.cts.rest.model.User;
//import com.cts.rest.repositories.ParentTaskRepository;
//import com.cts.rest.repositories.TaskRepository;
import com.cts.rest.repositories.UserRepository;

public class TaskManagerServiceImpl implements TaskManagerService{
	public static final Logger LOGGER = LoggerFactory.getLogger(TaskManagerService.class);
	
	@Autowired
	private UserRepository userRepository;

	public User saveUser(User user) throws DataAccessException {
		LOGGER.info("saveUser Start");
	    User returnUser	=userRepository.save(user);
	    LOGGER.info("saveUser End");
		return returnUser;
	}
	



}
