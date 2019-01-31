package com.cts.rest.model;

import org.junit.Test;
import com.codebox.bean.JavaBeanTester;

public class UserTest {

	@Test
	public void pojoTest() {
		JavaBeanTester.builder(User.class).test();
	}
}