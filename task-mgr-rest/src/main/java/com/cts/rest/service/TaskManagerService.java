package com.cts.rest.service;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.cts.rest.model.Task;
import com.cts.rest.model.User;

public interface TaskManagerService {
	User saveUser(User user) throws DataAccessException;
}
