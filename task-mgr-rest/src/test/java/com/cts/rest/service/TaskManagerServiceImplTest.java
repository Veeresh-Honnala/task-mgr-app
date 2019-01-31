package com.cts.rest.service;


import static org.junit.Assert.assertEquals;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cts.rest.model.User;
import com.cts.rest.repositories.UserRepository;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskManagerServiceImplTest {
	
	@Autowired
	TaskManagerServiceImpl taskManagerServiceImpl;
	
	@MockBean
	UserRepository userRepository;
	
	@MockBean
	User user; 
	
	@Test
	public void testSaveUser() {
		Mockito.when(userRepository.save(user)).thenReturn(user);
		User user1 = taskManagerServiceImpl.saveUser(user);
		assertEquals(user, user1);
	}

}
