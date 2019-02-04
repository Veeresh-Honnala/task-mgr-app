package com.cts.rest.controller;

import static org.junit.Assert.*;

import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cts.rest.model.Project;
import com.cts.rest.model.User;
import com.cts.rest.service.TaskManagerService;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskManagerControllerTest {

	@MockBean
	TaskManagerService taskManagerService;

	@Autowired
	TaskManagerController taskManagerController;
	
	@MockBean
	Project project;
	
	@MockBean
	List<Project> projects;
	
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
		Mockito.when(taskManagerService.saveUser(Mockito.any())).thenThrow(NullPointerException.class);
		assertEquals("testSaveOrUpdateUser","1",taskManagerController.saveOrUpdateUser(usr).getErrCode());
	}

	@Test
	public void testSaveOrUpdateProject() {
		Mockito.when(taskManagerService.saveProject(Mockito.any(Project.class))).thenReturn(project);
		assertEquals("testSaveOrUpdateProject","0",taskManagerController.saveOrUpdateProject(project).getErrCode());
	}
	
	@Test
	public void testSaveOrUpdateProjectWithException() {
		Mockito.when(taskManagerService.saveProject(Mockito.any(Project.class))).thenThrow(NullPointerException.class);
		assertEquals("testSaveOrUpdateProject","1",taskManagerController.saveOrUpdateProject(project).getErrCode());
	}
	
	@Test
	public void testGetProjects() {
		Mockito.when(taskManagerService.getProjects()).thenReturn(projects);
		assertEquals("testSaveOrUpdateProject","0",taskManagerController.getProjects().getErrCode());
	}
	
	@Test
	public void testGetProjectsWithException() {
		Mockito.when(taskManagerService.getProjects()).thenThrow(NullPointerException.class);
		assertEquals("testSaveOrUpdateProject","1",taskManagerController.getProjects().getErrCode());
	}
	
}
