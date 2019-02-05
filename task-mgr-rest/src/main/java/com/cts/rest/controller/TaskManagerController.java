package com.cts.rest.controller;


import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cts.rest.model.Project;
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
			 LOGGER.error("Exception while persisting User data : ",e);
			 response= new Responce<String>(null,"Failure","1");
			 response.setErrMsg(e.getMessage());
		}	
		LOGGER.info("saveOrUpdateUser End");
		return response;
	}
	
	@RequestMapping(path = "/getUsers",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE)
	public Responce<List<User>> getUsers(){
		LOGGER.info("getUsers Start");
		Responce<List<User>> response;
		try {
			List<User> users =taskManagerService.getUsers();
			response= new Responce<>(users,"Success","0");
		}catch(Exception e) {
			 LOGGER.error("Exception while fetching User data : ",e);
			 response= new Responce<>(null,"Failure","1");
			 response.setErrMsg(e.getMessage());
		}	
		LOGGER.info("getUsers End");
		return response;
	}
	
	@RequestMapping(path = "/findUsersByName",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE)	
	public Responce<List<User>> findUsersByName(@RequestParam("name") String name){
		LOGGER.info("findUsersByName Start");
		Responce<List<User>> response;
		try {
			List<User> users =taskManagerService.findUsersByName(name);
			response= new Responce<>(users,"Success","0");
		}catch(Exception e) {
			 LOGGER.error("Exception while fetching user by name : ",e);
			 response= new Responce<>(null,"Failure","1");
			 response.setErrMsg(e.getMessage());
		}	
		LOGGER.info("findUsersByName End");
		return response;
	}


	@RequestMapping(path = "/saveOrUpdateProject",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE)
	public Responce<Integer> saveOrUpdateProject(@RequestBody Project project) {
		LOGGER.info("saveOrUpdateProject Start");
		Responce<Integer> response;
		try {
			Project project1 =taskManagerService.saveProject(project);
			response= new Responce<>(project1.getProjectId(),"Success","0");
		}catch(Exception e) {
			 LOGGER.error("Exception while persisting Project data : ",e);
			 response= new Responce<>(null,"Failure","1");
			 response.setErrMsg(e.getMessage());
		}	
		LOGGER.info("saveOrUpdateProject End");
		return response;
	}
	
	@RequestMapping(path = "/getProjects",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE)
	public Responce<List<Project>> getProjects() {
		LOGGER.info("getProjects Start");
		Responce<List<Project>> response;
		try {
			List<Project> projects =taskManagerService.getProjects();
			response= new Responce<>(projects,"Success","0");
		}catch(Exception e) {
			 LOGGER.error("Exception while fetching Project data : ",e);
			 response= new Responce<>(null,"Failure","1");
			 response.setErrMsg(e.getMessage());
		}	
		LOGGER.info("getProjects End");
		return response;
	}
	
	@RequestMapping(path = "/findProjectsByName",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE)
	public Responce<List<Project>> findProjectsByName() {
		LOGGER.info("findProjectsByName Start");
		Responce<List<Project>> response;
		try {
			List<Project> projects =taskManagerService.getProjects();
			response= new Responce<>(projects,"Success","0");
		}catch(Exception e) {
			 LOGGER.error("Exception while fetching Project data : ",e);
			 response= new Responce<>(null,"Failure","1");
			 response.setErrMsg(e.getMessage());
		}	
		LOGGER.info("findProjectsByName End");
		return response;
	}

}
