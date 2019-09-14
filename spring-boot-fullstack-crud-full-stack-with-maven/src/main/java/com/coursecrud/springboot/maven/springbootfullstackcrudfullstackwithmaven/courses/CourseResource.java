package com.coursecrud.springboot.maven.springbootfullstackcrudfullstackwithmaven.courses;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
	
}
