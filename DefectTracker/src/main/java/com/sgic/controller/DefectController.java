package com.sgic.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import com.sgic.entity.Defect;
import com.sgic.entity.Project;
import com.sgic.exception.ResourceNotFoundException;
import com.sgic.repository.DefectRepostories;
import com.sgic.repository.ProjectRepository;

import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api/v1")
public class DefectController {
	@Autowired
	DefectRepostories defectRepostories;

	@Autowired
	ProjectRepository projectRepostories;

	@PostMapping("/project/{projectId}")
	public Object createDefect(@PathVariable(value = "projectId") Long projectId, @Valid @RequestBody Defect defect) {
		return projectRepostories.findById(projectId).map(project -> {
			defect.setProject(project);
			return defectRepostories.save(defect);
		});
	}

	@GetMapping("/project/{projectId}/defects")
	public Page<Defect> getAllDefectsByProjectId(@PathVariable(value = "projectId") Long projectId, Pageable pageable) {
		return defectRepostories.findByProjectId(projectId, pageable);
	}


	@DeleteMapping("/defects/{defectsId}")
	public void deleteDefect(@PathVariable(value = "defectsId") Defect defect) {
		defectRepostories.delete(defect);
	}
	
	@PutMapping("/project/{projectId}/defects")
	public Object updateDefect(@PathVariable(value = "projectId") Long projectId, @Valid @RequestBody Defect defect) {
		return projectRepostories.findById(projectId).map(project -> {
			defect.setProject(project);
			return defectRepostories.save(defect);
		});
	}
}
