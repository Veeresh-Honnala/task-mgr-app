package com.cts.rest.service;


import static org.junit.Assert.assertEquals;

import java.sql.SQLIntegrityConstraintViolationException;
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
import com.cts.rest.repositories.ProjectRepository;
import com.cts.rest.repositories.UserRepository;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskManagerServiceImplTest {
	
	@Autowired
	TaskManagerServiceImpl taskManagerServiceImpl;
	
	@MockBean
	UserRepository userRepository;
	
	@MockBean
	ProjectRepository projectRepository;
	
	@MockBean
	User user; 
	
	@MockBean
	Project project;
	
	
	@MockBean
	List<Project> projects; 
	
	@MockBean
	List<User> users;
	
	@Test
	public void testSaveUser() {
		Mockito.when(userRepository.save(user)).thenReturn(user);
		User user1 = taskManagerServiceImpl.saveUser(user);
		assertEquals(user, user1);
	}

	@Test
	public void testGetUsers() {
		Mockito.when(userRepository.findAll()).thenReturn(users);
		assertEquals(users, taskManagerServiceImpl.getUsers());
	}

	@Test
	public void testFindUsersByName() {
		Mockito.when(userRepository.findByName(Mockito.anyString())).thenReturn(users);
		assertEquals(users, taskManagerServiceImpl.findUsersByName("Veeresh"));
	}
	
	@Test
	public void testSaveProject() {
		Mockito.when(projectRepository.save(Mockito.any(Project.class))).thenReturn(project);
		Project project1 = taskManagerServiceImpl.saveProject(project);
		assertEquals(project, project1);
	}
	
	@Test(expected=Exception.class)
	public void testSaveProjectNegitive() {
		Mockito.when(projectRepository.save(Mockito.any(Project.class))).thenThrow(SQLIntegrityConstraintViolationException.class);
		taskManagerServiceImpl.saveProject(project);
	}
	
	
	@Test
	public void testGetProjects() {
		Mockito.when(projectRepository.findAll()).thenReturn(projects);
		List<Project> projects1 = taskManagerServiceImpl.getProjects();
		assertEquals(projects, projects1);
	}
	
	@Test(expected=Exception.class)
	public void testGetProjectsNegitive() {
		Mockito.when(projectRepository.findAll()).thenThrow(SQLIntegrityConstraintViolationException.class);
		taskManagerServiceImpl.getProjects();
	}
	
	@Test
	public void testFindProjectsByName() {
		Mockito.when(projectRepository.findProjectsByName(Mockito.anyString())).thenReturn(projects);
		List<Project> projects1 = taskManagerServiceImpl.findProjectsByName("task");
		assertEquals(projects, projects1);
	}
	@Test(expected=Exception.class)
	public void testFindProjectsByNameNegitive() {
		Mockito.when(projectRepository.findProjectsByName(Mockito.anyString())).thenThrow(SQLIntegrityConstraintViolationException.class);
		taskManagerServiceImpl.findProjectsByName("task");
	}
}
