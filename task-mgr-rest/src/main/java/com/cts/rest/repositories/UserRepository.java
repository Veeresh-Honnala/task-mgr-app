package com.cts.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.rest.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
