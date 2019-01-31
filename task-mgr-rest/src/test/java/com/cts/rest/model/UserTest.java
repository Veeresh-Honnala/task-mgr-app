package com.cts.rest.model;

import static org.junit.Assert.assertNull;

import org.junit.Test;

public class UserTest {
	User user= new User();

	@Test
	public void testGetUserId() {
		assertNull(user.getUserId());
	}

	@Test
	public void testSetUserId() {
		user.setEmployeeId("");
	}

	@Test
	public void testGetFirstName() {
		assertNull(user.getFirstName());
	}

	@Test
	public void testSetFirstName() {
		user.setEmployeeId("");
	}

	@Test
	public void testGetLastName() {
		assertNull(user.getLastName());
	}

	@Test
	public void testSetLastName() {
		user.setEmployeeId("");
	}

	@Test
	public void testGetEmployeeId() {
		assertNull(user.getEmployeeId());
	}

	@Test
	public void testSetEmployeeId() {
		user.setEmployeeId("");
	}

	@Test
	public void testGetProjectId() {
		assertNull(user.getProjectId());
	}

	@Test
	public void testSetProjectId() {
		user.setEmployeeId("");
	}

	@Test
	public void testGetTaskId() {
		assertNull(user.getTaskId());
	}

	@Test
	public void testSetTaskId() {
		user.setEmployeeId("");
	}

}
