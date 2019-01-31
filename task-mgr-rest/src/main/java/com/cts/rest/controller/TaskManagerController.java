package com.cts.rest.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.rest.model.Responce;
import com.cts.rest.model.User;
import com.cts.rest.service.TaskManagerService;

@RestController
@RequestMapping(path="/api/projectmanager")
public class TaskManagerController {
	public static final Logger LOGGER = LoggerFactory.getLogger(TaskManagerController.class);
	@Autowired
	private TaskManagerService taskManagerService;

	@GetMapping(path = "/ping", produces = MediaType.APPLICATION_JSON_VALUE)
	public Responce<String> ping() {
		LOGGER.info("from inside ping method");
		return new Responce<String>("Success","Success","0");
	}
	
	@RequestMapping(path = "/saveOrUpdateUser",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE)
	public Responce<String> saveOrUpdateUser(@RequestBody User user) {
		LOGGER.info("saveOrUpdateUser Start");
		Responce<String> response;
		try {
			User user1 =taskManagerService.saveUser(user);
			response= new Responce<String>(user1.getUserId(),"Success","0");
		}catch(Exception e) {
			 LOGGER.error("Exception while persisting User data : "+e.toString());
			 response= new Responce<String>(null,"Failure","1");
			 response.setErrMsg(e.getMessage());
		}	
		LOGGER.info("saveOrUpdateUser End");
		return response;
	}
}
