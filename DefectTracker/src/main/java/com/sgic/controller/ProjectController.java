package com.sgic.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sgic.entity.Project;
import com.sgic.exception.ResourceNotFoundException;
import com.sgic.repository.ProjectRepository;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api/v1")
public class ProjectController {
	@Autowired
	ProjectRepository projectRepository;

	@PostMapping(value = "/project")
	public ResponseEntity<?> createProject(@RequestBody Project project) {
		projectRepository.save(project);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}

	@GetMapping("/project")
	public List<Project> getProject() {
		return projectRepository.findAll();

	}

	@GetMapping("/project/{projectId}")
	public Optional<Project>  getProjectById(@PathVariable("projectId") long projectId){
		return projectRepository.findById(projectId);
		
	}
	@PutMapping("/project")
	public void updateProject(@Valid @RequestBody Project project) {
			projectRepository.save(project);
	}


	
	@DeleteMapping("/project/{projectId}")
	public void deleteProject(@PathVariable Long projectId) {
			projectRepository.deleteById(projectId);

	}

}
