package com.cts.rest.model;


import org.junit.AfterClass;
import org.junit.Test;

public class ResponceTest {

	static Responce<String> res = new Responce<String>();

//	@BeforeClass
//	public static void setUp() throws Exception {
//		res= new Responce<>();
//	}

	@Test
	public void testResponce() {
		res= new Responce<String>(null, null, null);
		res.setErrCode("");
		res.getErrCode();
		res.setStatus("");
		res.getStatus();
		res.setOutData("");
		res.getOutData();

	}
	
	@AfterClass
	public static void tearDown() {
		res= null;
	}

}
