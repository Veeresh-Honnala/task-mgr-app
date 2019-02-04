package com.cts.rest.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cts.rest.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
	@Query("select p from Project p where p.project like %:name%")
	public List<Project> findProjectsByName(@Param("name") String name);
}
