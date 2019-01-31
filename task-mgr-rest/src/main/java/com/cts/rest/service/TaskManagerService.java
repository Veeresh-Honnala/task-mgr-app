package com.cts.rest.service;


import org.springframework.dao.DataAccessException;
import com.cts.rest.model.User;

public interface TaskManagerService {
	User saveUser(User user) throws DataAccessException;
}
