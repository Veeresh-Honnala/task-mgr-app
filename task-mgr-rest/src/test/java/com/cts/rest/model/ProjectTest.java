package com.cts.rest.model;


import org.junit.Test;
import com.codebox.bean.JavaBeanTester;

public class ProjectTest {

	@Test
	public void projectTest() {
		JavaBeanTester.builder(Project.class).test();
	}
}
