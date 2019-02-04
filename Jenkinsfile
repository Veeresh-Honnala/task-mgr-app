#!/usr/bin/env groovy


try{
   
	node('master') {
	
   	  stage ('Checkout'){
	       echo "check out start"
		   checkout scm
	       echo "check out end"
	     }
	
	  stage('Clean Test'){
	   	  echo "clean test start"
	   	  sh 'mvn clean test -Pdev'		
	   	  echo "clean test end"
	   	  }
	  
	  stage('archive') {
	            echo "archive start"
                archiveArtifacts artifacts: '**/target/**', fingerprint: true 
                echo "archive end"
        }
	   	  
	  stage('Clean Package'){
	   	  echo "clean package start"
	   	  sh 'mvn clean package -Dspring.profiles.active=docker -Dmaven.test.skip'		
	   	  echo "clean package end"
	   	}
	    	
	  
      
	
	}	
	

}catch(ex){
  err = caughtError
       mail subject: "${env.JOB_NAME} (${env.BUILD_NUMBER}) Failed",
       body: "It appears that ${env.BUILD_URL} is failing, somebody should do something about that",
       to: 'kumar.hv3@gmail.com',
       replyTo: 'kumar.hv3@gmail.com',
       from: 'kumar.hv3@gmail.com'
 
}finally{
  echo "executing finally block"
}



def buildDev(){

	node {
	   stage 'check out and clean'
	       print "check out start"
		   checkout scm
		   sh 'mvn clean'
	       print "check out end"
	   stage 'check out and clean'
	   	  print "clean package start"
	   	  sh 'mvn clean package'
	   	  print "clean package end"
	
	}
}