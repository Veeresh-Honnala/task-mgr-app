CREATE DATABASE taskmanager;

USE taskmanager;

INSERT INTO mysql.user (User,Host,authentication_string,ssl_cipher,x509_issuer,x509_subject)
VALUES('taskmanager','localhost',PASSWORD('taskmanager'),'','','');

FLUSH PRIVILEGES;

GRANT ALL PRIVILEGES ON taskmanager.* to taskmanager@localhost;

FLUSH PRIVILEGES;

DROP TABLE IF EXISTS `user`;
create table user(
   user_id INT NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(100) NOT NULL,
   last_name VARCHAR(100) NOT NULL,
   employee_id VARCHAR(100) NOT NULL UNIQUE,
   project_id INT,
   task_id INT,
   PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS `project`;
create table project(
   project_id INT NOT NULL AUTO_INCREMENT,
   project VARCHAR(100) NOT NULL,
   priority VARCHAR(100) NOT NULL,
   start_date DATE,
   end_date DATE,
   PRIMARY KEY (project_id)
);

DROP TABLE IF EXISTS `task`;
create table task(
   task_id INT NOT NULL AUTO_INCREMENT,
   parent_id INT,
   project_id INT,
   task_name VARCHAR(100) NOT NULL,
   priority VARCHAR(100) NOT NULL,
   edit_enabled VARCHAR(1), 
   start_date DATE,
   end_date DATE,
   PRIMARY KEY (task_id)
);

DROP TABLE IF EXISTS `parent_task`;
create table parent_task(
   parent_id INT NOT NULL AUTO_INCREMENT,
   parent_task VARCHAR(100) NOT NULL,
   PRIMARY KEY (parent_id)
);