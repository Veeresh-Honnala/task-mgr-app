package com.cts.rest.controller;

import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cts.rest.model.Responce;
import com.cts.rest.model.User;
import com.cts.rest.service.TaskManagerService;
import com.cts.rest.service.TaskManagerServiceImpl;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskManagerControllerTest {

	@MockBean
	TaskManagerService taskManagerService;

	@Autowired
	TaskManagerController taskManagerController;
	
	@Test
	public void testPing() {
		assertEquals("ping","Success", taskManagerController.ping().getStatus());
	}

	@Test
	public void testSaveOrUpdateUser() {
		User usr = new User();
		usr.setUserId("user1");
		Mockito.when(taskManagerService.saveUser(Mockito.any())).thenReturn(usr);
		assertEquals("testSaveOrUpdateUser","user1",taskManagerController.saveOrUpdateUser(usr).getOutData());
	}
	
	@Test
	public void testSaveOrUpdateUserWithException() {
		User usr = new User();
		Mockito.when(taskManagerService.saveUser(Mockito.any())).thenReturn(null);
		assertEquals("testSaveOrUpdateUser","1",taskManagerController.saveOrUpdateUser(usr).getErrCode());
	}

}
