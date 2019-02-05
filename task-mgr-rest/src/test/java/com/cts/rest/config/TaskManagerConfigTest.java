package com.cts.rest.config;


import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskManagerConfigTest {
	
	@Autowired
	TaskManagerConfig taskManagerConfig;

	@Test
	public void testTaskManagerService() {
		assertNotNull(taskManagerConfig.taskManagerService());
	}

}
