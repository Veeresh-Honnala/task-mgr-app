package com.cts.rest.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cts.rest.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	@Modifying(clearAutomatically = true)
	@Query("Select u from User u where u.firstName like %:name% OR u.lastName like %:name%")
	public List<User> findByName( @Param("name") String name);
}
