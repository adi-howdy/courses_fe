package com.coursecrud.springboot.maven.springbootfullstackcrudfullstackwithmaven.courses;


import java.net.URI;
import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponentsBuilder;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
public class CourseResource {
	
	@Autowired
	private CoursesService courseManagementService;
	
	@GetMapping("/courseslist")
	public List<Course> sendAllCourse(){
		return courseManagementService.returnAll();
	}
	
	@DeleteMapping("/courseslist/{id}")
	public ResponseEntity<Void> deleteCourse(@PathVariable long id){
		Course course = courseManagementService.deleteById(id);
		
		if(course != null){
			return ResponseEntity.noContent().build();
		}
		 
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/courseslist/{id}")
	public Course getCourse(@PathVariable long id){
		return courseManagementService.findById(id);	
	}
	
	@PutMapping("/courseslist/{id}")
	public ResponseEntity<Course> updateCourse(@RequestBody Course course){
		Course updatedCourse = courseManagementService.save(course);
		return new ResponseEntity<Course>(updatedCourse, HttpStatus.OK);
	}
	
	@PostMapping("/courseslist")
	public ResponseEntity<Void> createCourse(@RequestBody Course course){
		Course createdCourse = courseManagementService.save(course);
		//return new ResponseEntity<Course>(createdCourse, HttpStatus.OK);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/id").buildAndExpand(createdCourse.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

}
