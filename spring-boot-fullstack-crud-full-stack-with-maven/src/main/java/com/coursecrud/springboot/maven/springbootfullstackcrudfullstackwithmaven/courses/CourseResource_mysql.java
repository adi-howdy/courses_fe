package com.coursecrud.springboot.maven.springbootfullstackcrudfullstackwithmaven.courses;


import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
public class CourseResource_mysql {
	
	@Autowired
	private CourseRepository courseRepository;
	
	@GetMapping("/courseslist")
	public List<Course> sendAllCourse(){
		return courseRepository.findAll();
	}
	
	@DeleteMapping("/courseslist/{id}")
	public ResponseEntity<Void> deleteCourse(@PathVariable long id){
		courseRepository.deleteById(id);
			return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/courseslist/{id}")
	public Course getCourse(@PathVariable long id){
		Optional<Course> course = courseRepository.findById(id);
		if(course.isPresent()){
		return course.get();
		}
		return null;
	}
	
	@PostMapping("/courseslist")
	public ResponseEntity<Void> createCourse(@RequestBody Course course){
		Course createdCourse = courseRepository.save(course);
		//return new ResponseEntity<Course>(createdCourse, HttpStatus.OK);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/id").buildAndExpand(createdCourse.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/courseslist/{id}")
	public ResponseEntity<Course> updateCourse(@RequestBody Course course){
		Course updatedCourse = courseRepository.save(course);
		return new ResponseEntity<Course>(updatedCourse, HttpStatus.OK);
	}	
	}


