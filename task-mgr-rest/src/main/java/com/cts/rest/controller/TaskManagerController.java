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
import org.springframework.web.bind.annotation.RestController;

import com.cts.rest.constants.TaskManagerConstants;
import com.cts.rest.model.Responce;
import com.cts.rest.model.Task;
import com.cts.rest.service.TaskManagerService;

@RestController
@RequestMapping(path="/api/taskmanager")
public class TaskManagerController {
	public static final Logger LOGGER = LoggerFactory.getLogger(TaskManagerController.class);
	@Autowired
	private TaskManagerService taskManagerService;

	@GetMapping(path = "/ping", produces = MediaType.APPLICATION_JSON_VALUE)
	public Responce<String> ping() {
		LOGGER.info("from inside ping method");
		return new Responce<String>("Success","Success","0");
	}
	


}
